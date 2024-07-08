FROM python:3.9

WORKDIR /back

COPY . /back

RUN apt-get update && apt-get install -y nginx supervisor

RUN pip install -r requirements.txt

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

CMD ["/usr/bin/supervisord"]
