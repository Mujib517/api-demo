FROM node:14-alpine
WORKDIR /app
COPY package.json /app
COPY . /app
CMD node index.js
EXPOSE 8080