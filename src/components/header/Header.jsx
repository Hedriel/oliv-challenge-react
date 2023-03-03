import { Navbar } from "./Navbar";
import logo from "../../img/logo.svg";

export function Header() {
  return (
    <div className="header fixed w-full bg-white my">
      <nav className=" flex h-20 border-b  md:mx-20">
        <div className="hidden items-center gap-1 md:flex">
          <div className="flex gap-2">
            <img src={logo} />
            <span>oliv</span>
          </div>
        </div>
        <Navbar />
      </nav>
    </div>
  );
}
