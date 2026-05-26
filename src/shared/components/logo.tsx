import { Link } from "react-router";
import { Clapperboard } from "@/shared/components/icons";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <Clapperboard className="text-accent" size={28} strokeWidth={1.75} />
      <span className="hidden font-bold text-[clamp(1rem,2vw,1.25rem)] text-accent tracking-wide md:block">
        MovieDB
      </span>
    </Link>
  );
}
