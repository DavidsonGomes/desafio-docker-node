FROM node:15

RUN mkdir -p /usr/src/app/node_modules && chown -R root:root /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install mysql

COPY . .

COPY --chown=root:root . .

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER root

EXPOSE 5000

CMD [ "node", "app.js" ]