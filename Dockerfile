FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install -g @angular/cli

COPY . /app

RUN npm run build --prod

CMD ng serve --host 0.0.0.0


