export function formatYear(dateString: string): string {
  if (!dateString) return "—";
  return new Date(dateString).getFullYear().toString();
}

export function formatDate(dateString: string): string {
  if (!dateString) return "—";
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
