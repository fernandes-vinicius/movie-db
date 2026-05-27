import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import { queryClient } from "@/lib/react-query/client";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NuqsAdapter>{children}</NuqsAdapter>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
