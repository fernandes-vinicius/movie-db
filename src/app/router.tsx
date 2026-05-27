import { Route, Routes } from "react-router";
import { Favorites } from "@/app/routes/favorites";
import { Home } from "@/app/routes/home";
import { MovieDetails } from "@/app/routes/movie-details";
import { Search } from "@/app/routes/search";
import { Layout } from "@/shared/components/layout";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}
