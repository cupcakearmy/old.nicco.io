FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

CMD [ "yarn", "run", "start" ]