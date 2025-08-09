# Docker Setup Guide

## Prerequisites

1. **Docker Registry Secrets**: Add these secrets to your GitHub repository:
   - `DOCKER_USERNAME`: Your private registry username
   - `DOCKER_PASSWORD`: Your private registry password/token

2. **Self-hosted Runner**: Set up a self-hosted GitHub Actions runner on your production server.

3. **Update Registry URL**: Replace `your-private-registry.com` in the workflow files with your actual private registry URL.

## Workflow Overview

### 1. Build Workflow (`docker-build.yml`)
- Triggers on pushes to `main` and `builder` branches
- Builds Docker image using multi-stage build
- Pushes to private registry with multiple tags
- Supports multi-platform builds (linux/amd64, linux/arm64)

### 2. Deploy Workflow (`deploy.yml`)
- Triggers when build workflow completes successfully on `main` branch
- Runs on self-hosted runner
- Pulls latest image from registry
- Stops old container and starts new one
- Includes health checks and cleanup

## Local Development

### Build and run locally:
```bash
# Build the image
docker build -t fragsoc-website .

# Run the container
docker run -p 3000:3000 fragsoc-website
```

### Using Docker Compose:
```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# Stop
docker-compose down
```

## Production Deployment

### Manual deployment on server:
```bash
# Pull latest image
docker pull your-private-registry.com/fragsoc-website:latest

# Stop existing container
docker stop fragsoc-website-prod || true
docker rm fragsoc-website-prod || true

# Run new container
docker run -d \
  --name fragsoc-website-prod \
  --restart unless-stopped \
  -p 3000:3000 \
  your-private-registry.com/fragsoc-website:latest
```

## Configuration

### Environment Variables
You can add environment variables to the Docker run command or docker-compose.yml:
```bash
docker run -d \
  --name fragsoc-website-prod \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e CUSTOM_VAR=value \
  your-private-registry.com/fragsoc-website:latest
```

### Ports
- The application runs on port 3000 inside the container
- Mapped to port 3000 on the host by default
- Change the first port number to use a different host port: `-p 8080:3000`

## Troubleshooting

### Check container logs:
```bash
docker logs fragsoc-website-prod
```

### Check running containers:
```bash
docker ps
```

### Clean up old images:
```bash
docker image prune -f
```

### Connect to running container:
```bash
docker exec -it fragsoc-website-prod sh
```
