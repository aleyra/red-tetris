FROM node:latest

WORKDIR /app

COPY ./front/package.json ./front/package-lock.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
