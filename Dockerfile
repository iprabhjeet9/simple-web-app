FROM node:16

WORKDIR /usr/src/app

copy package*.json ./

RUN npm install

copy . .

CMD ["npm","start"]