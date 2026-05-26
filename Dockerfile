# 1. Base Image
FROM node:18-alpine AS base

# 2. Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Builder (Compiles Next.js to the /app/out folder)
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_FORMSPREE_FORM_ID
ENV NEXT_PUBLIC_FORMSPREE_FORM_ID=${NEXT_PUBLIC_FORMSPREE_FORM_ID}
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

ENV NEXT_TELEMETRY_DISABLED 1

# This will generate the "out" directory
RUN NODE_OPTIONS='--max-old-space-size=4096' npm run build

# 4. Runner (Uses Nginx inside the container to mimic the dynamic server)
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Clear default Nginx static files
RUN rm -rf ./*

# Copy the static Next.js export into the Nginx container
COPY --from=builder /app/out ./

# Adjust Nginx to listen on port 3000 instead of 80 to match your old system
RUN sed -i 's/listen\.+80;/listen 3000;/g' /etc/nginx/conf.d/default.conf || \
    echo -e "server {\n    listen 3000;\n    location / {\n        root /usr/share/nginx/html;\n        try_files \$uri \$uri/ \$uri.html =404;\n    }\n}" > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]