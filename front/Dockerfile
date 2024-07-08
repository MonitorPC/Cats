FROM node:16.16.0 AS build

WORKDIR /front 

COPY . /front

RUN npm install

RUN npm run build

FROM ubuntu

COPY --from=build /usr/local /usr/local

WORKDIR /front

COPY --from=build ./front /front

RUN apt-get update && apt-get install -y nginx supervisor

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord"]
