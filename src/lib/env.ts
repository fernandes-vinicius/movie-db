import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_TMDB_API_KEY: z.string().min(1, "TMDB API key is required"),
    VITE_TMDB_BASE_URL: z.url(),
    VITE_TMDB_IMAGE_BASE_URL: z.url(),
  },
  runtimeEnv: import.meta.env,
});
