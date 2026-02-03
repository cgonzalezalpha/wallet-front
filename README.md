# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Docker (compilar con `@Dockerfile`)

Este proyecto incluye un `Dockerfile` multi-stage (build con Node y runtime con Nginx).

### Construir imagen

> Nota: `VITE_API_BASE_URL` es **build-time** en Vite, por eso se pasa como `--build-arg`.

```bash
docker build \
  --build-arg VITE_API_BASE_URL="http://localhost:3000" \
  -t wallet-front:latest \
  .
```

### Ejecutar contenedor

```bash
docker run --rm -p 8080:80 wallet-front:latest
```

Luego abre `http://localhost:8080`.
