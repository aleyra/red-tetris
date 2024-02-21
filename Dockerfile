# Stage 1: Build the React front
FROM node:14-alpine as front-installer

WORKDIR /app/front

COPY front/package.json front/package-lock.json ./

RUN npm install

# Stage 2: Build the React front
FROM node:14-alpine as front-builder

WORKDIR /app/front

COPY front/ .

RUN npm run build

# Stage 3: Build the Node.js server
FROM node:14-alpine as server-builder

WORKDIR /app/server

COPY server/package.json server/package-lock.json ./

RUN npm install

# Stage 3: Create the final image
FROM node:14-alpine

WORKDIR /app/server

COPY --from=front-builder /app/front/build /app/front/public
COPY --from=server-builder /app/server .

EXPOSE 8000

CMD ["npm", "start"]
