import { SEO } from "@/shared/components/seo";

export function Home() {
  return (
    <>
      <SEO title="Filmes Populares" />

      <main className="flex min-h-screen items-center justify-center bg-background">
        <h1 className="font-bold text-4xl text-foreground">Hello World</h1>
      </main>
    </>
  );
}
