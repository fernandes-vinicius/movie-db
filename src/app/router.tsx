import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "@/shared/components/layout";

const Home = lazy(() =>
  import("@/app/routes/home").then((m) => ({ default: m.Home })),
);
const MovieDetails = lazy(() =>
  import("@/app/routes/movie-details").then((m) => ({
    default: m.MovieDetails,
  })),
);
const Favorites = lazy(() =>
  import("@/app/routes/favorites").then((m) => ({ default: m.Favorites })),
);
const Search = lazy(() =>
  import("@/app/routes/search").then((m) => ({ default: m.Search })),
);

export function AppRouter() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
