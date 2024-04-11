FROM node:20 

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

CMD [ "node", "dist/index.js" ]