FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm i -g yarn && yarn

COPY . .

RUN yarn build


FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
