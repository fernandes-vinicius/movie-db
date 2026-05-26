import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { Menu } from "@/shared/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { nav } from "@/shared/config/nav-config";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Abrir menu de navegação"
        className={cn(
          "flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors",
          "hover:bg-muted hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        <Menu size={20} aria-hidden="true" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        {nav.map(({ to, label, end }) => (
          <DropdownMenuItem key={to} asChild>
            <NavLink
              to={to}
              end={end}
              className="flex items-center gap-2 [&[aria-current=page]]:font-medium [&[aria-current=page]]:text-primary"
            >
              {label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
