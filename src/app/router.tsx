import { Route, Routes } from "react-router";
import { Home } from "@/app/routes/home";
import { Layout } from "@/shared/components/layout";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
