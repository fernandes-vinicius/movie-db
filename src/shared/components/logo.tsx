import { Link } from "react-router";
import { ClapperboardIcon } from "@/shared/components/icons";

export function Logo() {
  return (
    <Link
      to="/"
      aria-label="MovieDB - Página inicial"
      className="flex items-center gap-2"
    >
      <ClapperboardIcon className="text-accent" size={28} strokeWidth={1.75} />
      <span className="hidden font-bold text-[clamp(1rem,2vw,1.25rem)] text-accent tracking-wide md:block">
        MovieDB
      </span>
    </Link>
  );
}
