This is a NextJS app that generates random JSON log data with the frequency (1 to 3 times per second) and the duration (1 to 10 minutes) of the time the user specifies.

## Getting Started

To test the app locally, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Docker Hub

This app is published as a Docker container on [Docker Hub](https://hub.docker.com/r/madebybk/nextjs-random-json-logger).

### Build Docker

To build a Docker image (with amd64):

```bash
docker buildx build --platform=linux/amd64 -t madebybk/nextjs-random-json-logger .
```

To push the docker image to Docker Hub:

```bash
docker push madebybk/nextjs-random-json-logger
```
