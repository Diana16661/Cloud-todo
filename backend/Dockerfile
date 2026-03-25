# Stage 1: build
FROM node:20-bullseye AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: production
FROM node:20-bullseye
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["node", "src/app.js"]