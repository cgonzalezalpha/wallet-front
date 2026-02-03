import axios from 'axios'

const DEFAULT_BASE_URL = 'http://localhost:3000'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? DEFAULT_BASE_URL,
  timeout: 10_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

