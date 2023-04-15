# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY f/package*.json ./
RUN npm install

COPY f/ .

RUN npm run build

# Run Stage
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build /app/frontend

COPY f/ .

RUN npm install --only=production

EXPOSE 8081

CMD ["node", "server.js"]
