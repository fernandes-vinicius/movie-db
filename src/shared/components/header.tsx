import { Logo } from "@/shared/components/logo";
import { MobileMenu } from "@/shared/components/mobile-menu";
import { NavLinks } from "@/shared/components/nav-links";
import { SearchBar } from "@/shared/components/search-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-16 w-full items-center gap-2 px-4">
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
      </div>
    </header>
  );
}
