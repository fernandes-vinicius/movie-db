import { NavLink } from "react-router";
import { buttonVariants } from "@/shared/components/ui/button";
import { NAV_CONFIG } from "@/shared/config/nav-config";

export function NavLinks() {
  return (
    <nav aria-label="Navegação principal">
      <ul className="flex items-center gap-1">
        {NAV_CONFIG.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                buttonVariants({
                  variant: isActive ? "default" : "ghost",
                  size: "sm",
                })
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
