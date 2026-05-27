import { PopularMovies } from "@/features/movies/components/popular-movies";
import { SEO } from "@/shared/components/seo";

export function Home() {
  return (
    <>
      <SEO title="Filmes Populares" />
      <main>
        <PopularMovies />
      </main>
    </>
  );
}
