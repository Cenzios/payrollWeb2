#  Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies 
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Copy build artifacts and node_modules from builder
COPY --from=builder /app ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=6070

# Expose the desired port
EXPOSE 6070


# We force the port to 6070 and Host to 0.0.0.0 using 'npx next start'

CMD ["npx", "next", "start", "-p", "6070", "-H", "0.0.0.0"]