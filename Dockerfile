# --- Bước 1: Build React app ---
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Fix lỗi OpenSSL với Webpack/react-scripts
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# --- Bước 2: Serve bằng Nginx ---
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
