FROM node:16-alpine AS base

WORKDIR /app
RUN npm i -g @nestjs/cli
COPY ["package.json", "package-lock.json*", "./"]

# Development Docker
FROM base AS dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD [ "npm", "run", "start:dev" ]

# Production Docker
FROM base AS prod
ENV NODE_ENV=production
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "start:prod" ]
