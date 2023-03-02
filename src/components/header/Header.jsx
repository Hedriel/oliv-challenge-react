import { Navbar } from "./Navbar";
import { Logo } from "./Logo";

export function Header() {
  return (
    <div className="header">
      <nav className="flex h-20 border-b px-8 md:mx-20" >
        <div className="hidden items-center gap-1 md:flex">
          <Logo />
        </div>
        <Navbar />
      </nav>
    </div>
  );
}


