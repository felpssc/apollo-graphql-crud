FROM node

WORKDIR /usr/app

RUN apt update -y

COPY package.json ./
RUN yarn install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]