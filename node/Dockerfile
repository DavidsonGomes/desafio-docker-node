FROM node:15

RUN mkdir -p /usr/src/app/node_modules && chown -R root:root /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install mysql

COPY . .

COPY --chown=root:root . .

USER root

EXPOSE 5000

CMD [ "node", "app.js" ]