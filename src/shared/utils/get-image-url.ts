import { env } from "@/lib/env";

type ImageSize = "w185" | "w342" | "w500" | "w780" | "original";

export function getImageUrl(
  path: string | null,
  size: ImageSize = "w500",
): string | null {
  if (!path) return null;
  return `${env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path.replace(/\.jpg$/, ".webp")}`;
}
