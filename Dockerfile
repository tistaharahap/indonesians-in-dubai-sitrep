FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock* bun.lockb* ./
RUN bun install --frozen-lockfile || bun install

COPY . .
RUN rm -rf build .docusaurus && bun run build

FROM oven/bun:1-alpine AS runner

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/docusaurus.config.ts ./

EXPOSE 3000

CMD ["bunx", "docusaurus", "serve", "--host", "0.0.0.0", "--port", "3000"]
