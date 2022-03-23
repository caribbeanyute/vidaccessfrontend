FROM nginx:alpine

WORKDIR /app

COPY ./build ./build

#COPY ./nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY docker-entrypoint.sh /
ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]