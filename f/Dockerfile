# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Run Stage
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build /app/frontend

COPY . .

RUN npm install --only=production

EXPOSE 8081

CMD ["node", "server.js"]
