# JSON server

## Building

Build the node js application

```
yarn build
```

Build the docker image

```
docker build --tag dl-jsonserver:latest --file src/docker/DockerFile .
```

Running the docker image

```
docker-compose -f src/docker/app.yml up -d
```
