FROM node:14-buster as builder
WORKDIR /app
COPY package.json .
RUN npm install --registry=https://registry.npm.taobao.org

COPY . .

RUN npm run build

FROM nginx:1.21.6
COPY --from=builder /app/dist /usr/share/dist
