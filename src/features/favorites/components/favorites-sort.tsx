import {
  SORT_OPTIONS,
  type SortOption,
  useFavoritesSort,
} from "@/features/favorites/hooks/use-favorites-sort";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

const sortLabels: Record<SortOption, string> = {
  "title-asc": "Título (A-Z)",
  "title-desc": "Título (Z-A)",
  "rating-desc": "Nota (maior-menor)",
  "rating-asc": "Nota (menor-maior)",
};

export function FavoritesSort() {
  const [sortBy, setSortBy] = useFavoritesSort();

  return (
    <div className="flex items-center gap-3">
      <span className="text-foreground text-sm">Ordenar por:</span>
      <Select
        value={sortBy}
        onValueChange={(v) => setSortBy((v as SortOption) ?? null)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SORT_OPTIONS.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {sortLabels[opt]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
