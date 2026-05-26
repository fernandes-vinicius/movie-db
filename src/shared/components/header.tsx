import { Logo } from "@/shared/components/logo";
import { MobileMenu } from "@/shared/components/mobile-menu";
import { NavLinks } from "@/shared/components/nav-links";
import { SearchBar } from "@/shared/components/search-bar";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-border border-b bg-background px-6">
      <Logo />
      <div className="flex flex-1 justify-center">
        <SearchBar />
      </div>
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
