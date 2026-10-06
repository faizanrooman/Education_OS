# infra/docker

Dockerfiles and compose files for local and deployment.

| File | Purpose |
|---|---|
| `web.Dockerfile` | Builds `apps/web` with pnpm and serves the static output with nginx |
| `nginx.web.conf` | SPA fallback, asset caching, placeholder for the API proxy |
| `docker-compose.yml` | Runs the `eos-web` image on the deployment host |

## Deployment target

A Proxmox VE host on the office LAN. The app does not run on the Proxmox host itself. It runs
in a dedicated Debian 12 LXC container (unprivileged, nesting on, Docker inside), the same
shape as the other app containers on that host. Concrete host names, IPs and container ids
are kept out of this public repo; ask the platform lead.

### One-time: create the app container

On the Proxmox host as root, with your SSH public key saved at `/root/eos-deploy.pub`
(pick a free VMID and a free static IP on the LAN first):

```
pct create <vmid> local:vztmpl/debian-12-standard_12.12-1_amd64.tar.zst \
  --hostname education-os --ostype debian --unprivileged 1 --features nesting=1 \
  --cores 2 --memory 4096 --swap 512 --rootfs local-lvm:16 --onboot 1 \
  --net0 name=eth0,bridge=vmbr0,firewall=1,gw=<gateway>,ip=<container-ip>/24 \
  --ssh-public-keys /root/eos-deploy.pub
pct start <vmid>
pct exec <vmid> -- bash -c 'apt-get update && apt-get install -y curl git ca-certificates && curl -fsSL https://get.docker.com | sh'
```

### Every deploy

From your laptop, on the same LAN:

```
DEPLOY_HOST=root@192.168.1.60 tools/scripts/deploy-web.sh
```

The script builds the image locally, streams it to the host over SSH, and restarts the
compose stack. The site is then at `http://<container ip>:8080/?role=student`.

### Local check

```
docker build -f infra/docker/web.Dockerfile -t eos-web .
docker run --rm -p 8080:80 eos-web
```
