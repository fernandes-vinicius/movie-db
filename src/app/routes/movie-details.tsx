import { useParams } from "react-router";
import { MovieDetailView } from "@/features/movie-details/components/movie-detail-view";
import { SEO } from "@/shared/components/seo";

export function MovieDetails() {
  const { id: movieId } = useParams<{ id: string }>();

  return (
    <>
      <SEO title="Detalhes do Filme" />
      <main>
        <article>
          <MovieDetailView movieId={Number(movieId)} />
        </article>
      </main>
    </>
  );
}
