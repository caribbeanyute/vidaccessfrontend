FROM nginx:alpine

WORKDIR /app

COPY ./build ./build

COPY ./nginx.conf /etc/nginx/nginx.conf