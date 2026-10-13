FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html vibelocatif.html vibeodp.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY shots/ /usr/share/nginx/html/shots/
EXPOSE 80
