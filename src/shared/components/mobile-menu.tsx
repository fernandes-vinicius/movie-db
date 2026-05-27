import { NavLink } from "react-router";
import { MenuIcon } from "@/shared/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { NAV_CONFIG } from "@/shared/config/nav-config";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="Abrir menu de navegação">
        <MenuIcon size={20} aria-hidden="true" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        {NAV_CONFIG.map(({ to, label, end }) => (
          <DropdownMenuItem key={to} asChild>
            <NavLink
              to={to}
              end={end}
              className="flex items-center gap-2 aria-[aria-current=page]:font-medium aria-[aria-current=page]:text-primary"
            >
              {label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
