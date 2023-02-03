FROM nginx:latest AS ngi

COPY ./nginx/conf.d/nginx.conf  /etc/nginx/conf.d/default.conf

RUN mkdir /etc/nginx/conf.d/certs
ADD  ./nginx/certs/CloudFlare.pem  /etc/nginx/conf.d/certs/CloudFlare.pem
COPY ./nginx/certs/CloudFlare.key  /etc/nginx/conf.d/certs/CloudFlare.key
