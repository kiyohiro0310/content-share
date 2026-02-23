FROM nginx:alpine

COPY nginx.default.conf /etc/nginx/conf.d/default

COPY -r /app/client/dist/* /usr/share/nginx/html/

CMD [ "systemctl restart nginx" ]