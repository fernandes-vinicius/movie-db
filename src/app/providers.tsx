import { NuqsAdapter } from "nuqs/adapters/react-router/v7"
import type { ReactNode } from "react"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router"

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NuqsAdapter>{children}</NuqsAdapter>
      </BrowserRouter>
    </HelmetProvider>
  )
}
