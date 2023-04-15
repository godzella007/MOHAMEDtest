FROM node:18-alpine 

WORKDIR /b

COPY package*.json ./


RUN npm install

COPY ./public ./public

COPY ./src ./src

EXPOSE 8081

CMD ["npm","start"] 
