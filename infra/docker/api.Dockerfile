# Education OS API host. Build context is the repo root:
#   docker build -f infra/docker/api.Dockerfile -t eos-api .
FROM python:3.12-slim
WORKDIR /repo
COPY packages/core packages/core
COPY packages/testing packages/testing
COPY platform platform
COPY apps/api apps/api
RUN pip install --no-cache-dir -e packages/core -e packages/testing \
      -e platform/identity/backend -e platform/billing/backend -e platform/tenancy/backend -e apps/api
# the API reads academy profiles, plans and permission catalogues from the repo tree
COPY modules modules
ENV EOS_REPO_ROOT=/repo EOS_DEV_MODE=false
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=3s CMD python -c "import urllib.request;urllib.request.urlopen('http://127.0.0.1:8000/api/v1/health')" || exit 1
CMD ["uvicorn", "eos_api.main:app", "--host", "0.0.0.0", "--port", "8000"]
