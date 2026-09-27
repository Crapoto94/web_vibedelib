FROM nginx:1.27-alpine
COPY index.html /usr/share/nginx/html/index.html
COPY shots/ /usr/share/nginx/html/shots/
EXPOSE 80
