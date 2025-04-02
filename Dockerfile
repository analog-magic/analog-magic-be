FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Use this for normal operation
CMD ["node", "dist/main"]

# Alternatively, use this to seed and then start (uncomment when needed)
# CMD ["/bin/sh", "-c", "node dist/seed && node dist/main"]
