# Build Stage base
FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable
COPY package.json ./
RUN npm install
COPY . ./

# Build Stage development
FROM base AS dev
EXPOSE  3000
CMD ["npm", "run", "dev"]

# Build Stage build
FROM base AS build
RUN ["npm", "run", "build"]

# Build Stage production
FROM node:22-alpine as prod
WORKDIR /app
COPY --from=build /app/.output/ ./
ENV PORT 80
ENV HOST 0.0.0.0
EXPOSE 80
CMD ["node", "/app/server/index.mjs"]





