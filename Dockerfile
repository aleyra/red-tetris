# Stage 1: Build the React front
FROM node:latest as front-installer

WORKDIR /app/front

COPY front/package.json front/package-lock.json ./

RUN npm install

# Stage 2: Build the React front
FROM node:latest as front-builder

WORKDIR /app/front

COPY --from=front-installer /app/front/node_modules ./node_modules
COPY front/ .

RUN npm run build

# Stage 3: Build the Node.js server
FROM node:latest as server-builder

WORKDIR /app/server

COPY server/package.json server/package-lock.json ./

RUN npm install

# Stage 3: Create the final image
FROM node:latest as final

WORKDIR /app/server

COPY --from=front-builder /app/front/build ../front/build
COPY --from=server-builder /app/server/node_modules ./node_modules

EXPOSE 8000

CMD ["npm", "start"]