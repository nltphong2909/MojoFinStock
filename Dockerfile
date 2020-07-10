FROM node:10.15.3

WORKDIR /mojo-fin-stock

COPY dist ./

ENV NODE_ENV production

RUN npm install -g angular-http-server