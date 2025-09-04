import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { LogIn } from "lucide-react";

import { useState } from "react";
import Image from "./Image";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-medium">
        <Image src="/logo.png" alt="Logo" className="w-8 h-8" />
        <span>lamalog</span>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </div>

        {/* Mobile link list */}
        <div
          className={`w-full h-screen flex flex-col gap-10 items-center pt-25 absolute top-16 bg-white/10 backdrop-filter backdrop-blur-sm transition-all ease-in-out duration-200 select-none font-medium
            ${open ? "-right-0" : "-right-full"}
          `}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-blue-600 text-white cursor-pointer">
              Log in
              <LogIn size={22} />
            </button>
          </a>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-blue-600 text-white cursor-pointer">
            Log in
            <LogIn size={22} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
