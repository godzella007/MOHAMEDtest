FROM node:18-alpine

WORKDIR /app

COPY b/package*.json ./
RUN npm install --only=production

COPY b/ /app/


EXPOSE 8081

CMD [ "node", "server.js" ]
