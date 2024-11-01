# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN yarn build

# Stage 2: Serve the Next.js app with a minimal runtime environment
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./  

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Expose port 3000
EXPOSE 3000

# Start the optimized Next.js app
CMD ["yarn", "start"]

# Add environment variables to Docker
ENV NEXT_PUBLIC_IMAGE_HOSTNAME=wgs-directus.159.89.105.47.sslip.io
ENV NEXT_PUBLIC_IMAGE_PORT=8055
ENV NEXT_PUBLIC_DIRECTUS_API_URL=http://wgs-directus.159.89.105.47.sslip.io