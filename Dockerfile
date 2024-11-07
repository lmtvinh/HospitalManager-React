FROM node:20-alpine3.19 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# docker run -d -p 80:80 \
#     -v $PWD/index.html:/usr/share/caddy/index.html \
#     -v caddy_data:/data \
#     caddy
FROM caddy:2.8.4-alpine
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile

