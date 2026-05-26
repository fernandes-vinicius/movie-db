import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { nav } from "@/shared/config/nav-config";

export function NavLinks() {
  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-4">
        {nav.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
