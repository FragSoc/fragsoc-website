# Docker Setup Guide

## Prerequisites

1. **Self-hosted Runner**: Set up a self-hosted GitHub Actions runner on your production server.

2. **Environment Variables**: For local development, copy `.env.example` to `.env.local` and fill in your values.

## GitHub Secrets Setup

Add these secrets to your GitHub repository (**Settings** → **Secrets and variables** → **Actions**):

### Docker Registry Secrets
- **`DOCKER_REGISTRY`**: Your private registry URL
  - Examples: `registry.digitalocean.com`, `ghcr.io`, `your-domain.com:5000`
  - **Required**: Used in both build and deploy workflows
- **`DOCKER_USERNAME`**: Your private registry username
  - The username for authenticating with your Docker registry
- **`DOCKER_PASSWORD`**: Your private registry password/token
  - API token or password for registry authentication
  - For security, use an API token rather than your account password when possible

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

**⚠️ Important**: All these secrets are required for the workflows to function properly.

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

## Quick Reference

### Required GitHub Secrets Checklist
- ✅ `DOCKER_REGISTRY` - Your private registry URL
- ✅ `DOCKER_USERNAME` - Registry username  
- ✅ `DOCKER_PASSWORD` - Registry password/token
- ✅ `FORMSPREE_FORM_ID` - Formspree form ID

### Common Registry Examples
| Provider | Registry URL | Notes |
|----------|--------------|-------|
| Docker Hub | `docker.io` or leave empty | Default registry |
| GitHub Container Registry | `ghcr.io` | Free for public repos |
| DigitalOcean | `registry.digitalocean.com` | Managed registry service |
| AWS ECR | `<account-id>.dkr.ecr.<region>.amazonaws.com` | Replace account-id and region |
| Self-hosted | `your-domain.com:5000` | Custom registry setup |
