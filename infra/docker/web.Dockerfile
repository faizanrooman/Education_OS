# Build and serve apps/web. Build context is the repo root:
#   docker build -f infra/docker/web.Dockerfile -t eos-web .
FROM node:20-alpine AS build
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate
WORKDIR /repo
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc tsconfig.base.json ./
COPY apps ./apps
COPY packages ./packages
COPY modules ./modules
COPY platform ./platform
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @eos/web build

FROM nginx:1.27-alpine
COPY infra/docker/nginx.web.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/apps/web/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
