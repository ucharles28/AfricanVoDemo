-- Running Application as a Docker Container --
docker build -t prestigegodson/africanvo-frontend-dev:latest --build-arg environment=Development .
docker run -d -p 3000:3000 --name=AFRICAN_VO_FRONTEND prestigegodson/africanvo-frontend-dev