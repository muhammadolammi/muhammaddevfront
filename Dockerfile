FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY ./build .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
