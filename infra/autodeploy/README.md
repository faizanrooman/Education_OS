# infra/autodeploy

Push to `main` → GitHub Actions builds and tests → the build lands on the `web-dist` branch →
the nginx container pulls it within a minute and reloads. Nothing on the server holds a
secret, and no GitHub runner runs on the server (the repo is public, so a self-hosted runner
would let strangers' pull requests execute code there).

| File | Where it runs |
|---|---|
| `../../.github/workflows/web.yml` | GitHub. Typecheck, test, build, publish `apps/web/dist` to `web-dist` |
| `eos-web-autodeploy.sh` | Container, every minute. Fetch `web-dist`; if changed, swap `/var/www/education-os` and reload nginx |
| `eos-web-autodeploy.{service,timer}` | Container, systemd units for the above |
| `install.sh` | Container, once. Installs the three files and the vhost, starts the timer |

Install once, as root inside the nginx container:

```
bash <(curl -fsSL https://raw.githubusercontent.com/faizanrooman/Education_OS/main/infra/autodeploy/install.sh)
```

Check: `journalctl -t eos-web-autodeploy`, `systemctl list-timers eos-web*`, and `/VERSION` on the site
shows the short commit sha that is live. Rollback: revert the commit on `main`; the next build
deploys itself. The previous release also stays at `/var/www/education-os.old`.

`tools/scripts/deploy-web-static.sh` remains for a manual push from a laptop.
