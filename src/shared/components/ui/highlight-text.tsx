function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

interface HighlightTextProps {
  text: string;
  highlight: string;
}

export function HighlightText({ text, highlight }: HighlightTextProps) {
  if (!highlight.trim()) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRegex(highlight)})`, "gi"));
  const lower = highlight.toLowerCase();

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === lower ? (
          <mark
            key={String(i)}
            className="bg-accent font-bold text-accent-foreground not-italic"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
