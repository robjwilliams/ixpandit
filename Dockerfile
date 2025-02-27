FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . /app

RUN npm run build

EXPOSE 5173
