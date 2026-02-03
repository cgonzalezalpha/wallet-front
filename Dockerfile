## Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Instala deps primero para cache
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

## Runtime stage
FROM nginx:1.27-alpine AS runtime

# SPA fallback (por si luego agregas rutas)
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

