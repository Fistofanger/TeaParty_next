FROM node:20

WORKDIR /application

COPY package.json .
COPY package-lock.json .

ENV DATABASE_URL=postgres://postgres:postgres@31.129.43.100:5432/TeaParty

RUN npm ci 

COPY . . 

EXPOSE 3000

CMD ["node", "app.js"] 