FROM node:16-alpine AS builder
WORKDIR /dist
ADD . /dist
RUN npm install
RUN npm run build
CMD node server.js