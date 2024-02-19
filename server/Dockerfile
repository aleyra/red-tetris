from node:latest

WORKDIR /api

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 8000

CMD ["node", "server.js"]