import { Outlet } from "react-router";
import { Header } from "@/shared/components/header";
import { SEO } from "@/shared/components/seo";

export function Layout() {
  return (
    <>
      <SEO />

      <div className="min-h-screen bg-background">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
