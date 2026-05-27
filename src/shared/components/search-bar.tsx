import { type SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Input } from "@/shared/components/ui/input";

export function SearchBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(queryParam);

  useEffect(() => {
    setInputValue(queryParam);
  }, [queryParam]);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const term = inputValue.trim();
    if (term) navigate(`/search?q=${encodeURIComponent(term)}`);
  }

  return (
    <search aria-label="Buscar filmes" className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input" className="sr-only">
          Buscar filmes
        </label>

        <Input
          id="search-input"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Buscar filmes..."
          autoComplete="off"
          spellCheck={false}
          className="rounded-full"
        />
      </form>
    </search>
  );
}
