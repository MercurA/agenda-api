#! /bin/sh

docker system prune
docker volume rm $(docker volume ls -q)
docker image rm $(docker image ls -q) --force
docker compose up