import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import { AppRouter } from "@/app/router";
import { queryClient } from "@/lib/react-query/client";
import { ErrorFallback } from "@/shared/components/error-fallback";
import { FavoritesProvider } from "@/shared/contexts/favorites-context";

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NuqsAdapter>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <FavoritesProvider>
                <AppRouter />
              </FavoritesProvider>
            </ErrorBoundary>
          </NuqsAdapter>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
