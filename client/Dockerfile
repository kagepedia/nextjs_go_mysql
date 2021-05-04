FROM node:14-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN apk add --no-cache python make g++

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
