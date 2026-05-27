import { useSearchParams } from "react-router";
import { SearchResults } from "@/features/search/components/search-results";
import { SEO } from "@/shared/components/seo";

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return (
    <>
      <SEO title={query ? `Busca: ${query}` : "Busca"} />
      <main>
        <SearchResults query={query} />
      </main>
    </>
  );
}
