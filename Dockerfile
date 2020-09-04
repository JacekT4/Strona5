FROM nginx:1.19-alpine

COPY front-dev.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html/public

EXPOSE 80
