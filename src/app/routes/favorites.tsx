import { FavoritesGrid } from "@/features/favorites/components/favorites-grid";
import { SEO } from "@/shared/components/seo";

export function Favorites() {
  return (
    <>
      <SEO title="Favoritos" />
      <main>
        <FavoritesGrid />
      </main>
    </>
  );
}
