# STAGE 1: DEPENDENCIES.
# ==========================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on lock files.
COPY package.json package-lock.json* ./
RUN npm ci

# ==========================================
# STAGE 2: BUILD APP
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

# Copy everything except who's on the dockerignore files.
COPY . .
RUN npm run build

# ==========================================
# STAGE 3: RUNNER (Production Environment)
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

# Set to production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# UNROOT user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy EVERYTHING
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch, expose, then RUN.
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
# ==========================================
# END STAGE