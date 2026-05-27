import { Button } from "@/shared/components/ui/button";
import { Spinner } from "@/shared/components/ui/spinner";

interface LoadMoreButtonProps extends React.ComponentProps<typeof Button> {
  onLoadMore: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

export function LoadMoreButton(props: LoadMoreButtonProps) {
  const { onLoadMore, isFetchingNextPage, hasNextPage, ...rest } = props;

  if (!hasNextPage) return null;

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={onLoadMore}
      disabled={isFetchingNextPage}
      {...rest}
    >
      {isFetchingNextPage && <Spinner size="sm" aria-hidden="true" />}
      {isFetchingNextPage ? "Carregando..." : "Carregar mais"}
    </Button>
  );
}
