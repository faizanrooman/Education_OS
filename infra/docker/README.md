# infra/docker

Dockerfiles and compose files for local and deployment.

| File | Purpose |
|---|---|
| `web.Dockerfile` | Builds `apps/web` with pnpm and serves the static output with nginx |
| `nginx.web.conf` | SPA fallback, asset caching, placeholder for the API proxy |
| `api.Dockerfile`, `docker-compose.api.yml`, `.env.api.example` | The API host and Postgres on a Docker host. See "API" below |
| `nginx.static-vhost.conf` | Vhost for serving the build as static files from an existing nginx container on port 8080 |
| `docker-compose.yml` | Runs the `eos-web` image on the deployment host. `.env` beside it is written by the deploy script and git-ignored |

## Deployment target

A Proxmox VE host on the office LAN. The app does not run on the Proxmox host itself. It runs
in a dedicated Debian 12 LXC container (unprivileged, nesting on, Docker inside), the same
shape as the other app containers on that host. Host names, IPs and container ids are kept
out of this public repo; ask the platform lead.

### One-time: create the app container

On the Proxmox host as root, with your SSH public key saved at `/root/eos-deploy.pub`.
Pick a free VMID and a free static IP on the LAN first.

```
pct create <vmid> local:vztmpl/debian-12-standard_12.12-1_amd64.tar.zst \
  --hostname education-os --ostype debian --unprivileged 1 --features nesting=1 \
  --cores 2 --memory 4096 --swap 512 --rootfs local-lvm:16 --onboot 1 \
  --net0 name=eth0,bridge=vmbr0,firewall=1,gw=<gateway>,ip=<container-ip>/24 \
  --ssh-public-keys /root/eos-deploy.pub
pct start <vmid>
pct exec <vmid> -- bash -c 'apt-get update && apt-get install -y curl git ca-certificates && curl -fsSL https://get.docker.com | sh'
```

### Option A: static files in the existing nginx reverse-proxy container (current)

No Docker on the target. Builds locally, pushes the `dist` folder into the container with
`pct push`, installs `nginx.static-vhost.conf` on port 8080, tests and reloads nginx.

```
PVE_HOST=root@<proxmox-ip> CTID=<nginx container id> tools/scripts/deploy-web-static.sh
```

Site: `http://<container-ip>:8080/?role=student`. Previous release is kept at
`/var/www/education-os.old` for a quick rollback (`mv` it back and `nginx -s reload`).

### Option B: Docker in a dedicated container

From your laptop, on the office LAN, with the commit you want deployed pushed to `main`:

```
DEPLOY_HOST=root@<container-ip> tools/scripts/deploy-web.sh
```

The container pulls the repo at your checked-out commit, builds the image, and restarts the
compose stack. The site is then at `http://<container-ip>/?role=student`.
`DEPLOY_MODE=local` builds on your machine instead and streams the image over SSH.

### Public hostname

`educationos.futureacad.ae`, an A record to the same public IP as the other futureacad.ae
sites. `nginx.public-vhost.conf` is the vhost for the reverse-proxy container; it proxies to
the static vhost on port 8080. After DNS resolves, inside the container:

```
curl -fsSL https://raw.githubusercontent.com/faizanrooman/Education_OS/main/infra/docker/nginx.public-vhost.conf \
  -o /etc/nginx/sites-available/educationos.futureacad.ae
ln -sfn /etc/nginx/sites-available/educationos.futureacad.ae /etc/nginx/sites-enabled/
nginx -t && nginx -s reload
certbot --nginx -d educationos.futureacad.ae
```

### API

The API needs Docker and Postgres, so it does not run in the nginx container. It runs in a
container with Docker (the Debian LXC from option B, with nesting on), reachable from the proxy.

On that Docker host, once:

```
git clone https://github.com/faizanrooman/Education_OS.git /opt/education-os && cd /opt/education-os
cp infra/docker/.env.api.example infra/docker/.env.api   # fill in: DB password, 32+ byte JWT secret, super admin login
docker compose -f infra/docker/docker-compose.api.yml --env-file infra/docker/.env.api up -d --build
curl http://127.0.0.1:8000/api/v1/health
```

Every deploy: `git pull && docker compose -f infra/docker/docker-compose.api.yml --env-file infra/docker/.env.api up -d --build`.

Then in the nginx container, set `<api-host>` in the public vhost's `/api/` location to that host's IP
and reload. The web shell detects the API on load and switches from preview mode to real sign-up and sign-in.

Postgres tables get row-level-security policies automatically at startup (`eos_core.rls`). Backups:
`docker compose ... exec db pg_dump -U eos eos > eos-$(date +%F).sql`.

### Local check

```
docker build -f infra/docker/web.Dockerfile -t eos-web .
docker run --rm -p 8080:80 eos-web
```
