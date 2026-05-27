import { Outlet } from "react-router";
import { Header } from "@/shared/components/header";
import { SEO } from "@/shared/components/seo";

export function Layout() {
  return (
    <>
      <SEO />
      <div className="min-h-svh bg-background">
        <Header />
        <div className="px-4 py-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
