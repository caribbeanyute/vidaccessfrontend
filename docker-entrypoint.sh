#!/usr/bin/env sh
set -eu

envsubst '${SRS_API_URL} ${SA_API_URL} ${FF_API_HOST} ${FF_API_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"