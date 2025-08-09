# Docker Setup Guide

## Prerequisites

1. **Self-hosted Runner**: Set up a self-hosted GitHub Actions runner on your production server.

2. **Environment Variables**: For local development, copy `.env.example` to `.env.local` and fill in your values.

## GitHub Secrets Setup

Add these secrets to your GitHub repository (**Settings** → **Secrets and variables** → **Actions**):

### Docker Hub Secrets
- **`DOCKER_USERNAME`**: Your Docker Hub username
  - This will be used as part of the image name: `username/fragsoc-website`
- **`DOCKER_PASSWORD`**: Your Docker Hub password or access token
  - **Recommended**: Use an access token instead of your password
  - Generate at: [Docker Hub → Account Settings → Security](https://hub.docker.com/settings/security)

### Application Secrets
- **`FORMSPREE_FORM_ID`**: Your Formspree form ID (e.g., `xpwlkawk`)
  - Get this from your Formspree.io dashboard after creating a form

### How to Add Secrets
1. Navigate to your GitHub repository
2. Click **Settings** (repository settings, not your account)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Enter the secret name and value
6. Click **Add secret**

**⚠️ Important**: Only these 3 secrets are required for Docker Hub deployment.

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
# Pull latest image (replace 'your-username' with your Docker Hub username)
docker pull your-username/fragsoc-website:latest

# Stop existing container
docker stop fragsoc-website-prod || true
docker rm fragsoc-website-prod || true

# Run new container
docker run -d \
  --name fragsoc-website-prod \
  --restart unless-stopped \
  -p 3000:3000 \
  your-username/fragsoc-website:latest
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

## Quick Reference

### Required GitHub Secrets Checklist
- ✅ `DOCKER_USERNAME` - Your Docker Hub username
- ✅ `DOCKER_PASSWORD` - Docker Hub password/access token
- ✅ `FORMSPREE_FORM_ID` - Formspree form ID

### Registry Information
| Provider | Image Format | Notes |
|----------|--------------|-------|
| **Docker Hub** | `username/fragsoc-website` | **Current setup** - Free public registry |
| GitHub Container Registry | `ghcr.io/username/fragsoc-website` | Alternative option |
| DigitalOcean | `registry.digitalocean.com/your-registry/fragsoc-website` | Paid private registry |
| AWS ECR | `<account-id>.dkr.ecr.<region>.amazonaws.com/fragsoc-website` | AWS managed registry |
