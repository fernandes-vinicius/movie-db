import { AlertCircleIcon } from "@/shared/components/icons";
import { Button } from "@/shared/components/ui/button";
import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/shared/components/ui/empty-state";

export function ErrorFallback() {
  return (
    <EmptyState className="min-h-svh">
      <EmptyStateIcon>
        <AlertCircleIcon size={28} />
      </EmptyStateIcon>
      <EmptyStateTitle>Algo deu errado</EmptyStateTitle>
      <EmptyStateDescription>
        Ocorreu um erro inesperado. Tente recarregar a página ou voltar para o
        início.
      </EmptyStateDescription>
      <EmptyStateAction>
        <div className="flex gap-3">
          <Button onClick={() => window.location.reload()}>Recarregar</Button>
          <Button
            variant="ghost"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Ir para o início
          </Button>
        </div>
      </EmptyStateAction>
    </EmptyState>
  );
}
