FROM node AS app_build

WORKDIR /usr/src/app

COPY client/ ./client/

RUN cd client && npm install && npm run build


FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=app_build /usr/src/app/client/dist /usr/share/nginx/html

EXPOSE 80