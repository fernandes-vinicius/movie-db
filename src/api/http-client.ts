import axios from "axios";
import { env } from "@/lib/env";

export const httpClient = axios.create({
  baseURL: env.VITE_TMDB_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: env.VITE_TMDB_API_KEY,
    language: "pt-BR",
  };
  return config;
});
