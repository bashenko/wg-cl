# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /

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
WORKDIR /

# Copy only the necessary files from the build stage
COPY --from=builder /package.json /yarn.lock ./
COPY --from=builder /.next ./.next
COPY --from=builder /public ./public
COPY --from=builder /next.config.mjs ./  

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Expose port 3000
EXPOSE 3000

# Start the optimized Next.js app
CMD ["yarn", "start"]