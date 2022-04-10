FROM node:16-alpine as build

WORKDIR /app
COPY package*.json package-lock.json ./
RUN npm install
COPY public public
COPY src src
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx/templates /etc/nginx/templates/
COPY --from=build /app/build /usr/share/nginx/html