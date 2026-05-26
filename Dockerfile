# 1. Base Image
FROM node:18-alpine AS base

# 2. Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_FORMSPREE_FORM_ID
ENV NEXT_PUBLIC_FORMSPREE_FORM_ID=${NEXT_PUBLIC_FORMSPREE_FORM_ID}
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

ENV NEXT_TELEMETRY_DISABLED 1

# Generates the static "out" directory
RUN NODE_OPTIONS='--max-old-space-size=4096' npm run build

# 4. Runner (Nginx Container mimicking the old server)
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Clear default Nginx static files
RUN rm -rf ./*

# Copy the static Next.js export into the Nginx container
COPY --from=builder /app/out ./

# Copy our dedicated Nginx config over the default config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]