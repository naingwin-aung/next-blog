import { Menu } from "lucide-react";
import { X } from "lucide-react";

import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-medium">
        <Image src="/logo.png" alt="Logo" className="w-8 h-8" />
        <span>Lamalog</span>
      </Link>
      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </div>

        {/* Mobile link list */}
        <div className={`${open ? "block" : "hidden"}`}>
          <div
            className={`w-full h-screen flex flex-col gap-10 items-center pt-25 absolute top-16 bg-white/10 backdrop-filter backdrop-blur-sm transition-all ease-in-out duration-200 select-none font-medium
              ${open ? "-right-0" : "-right-full"}
            `}
          >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/">
              <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-blue-600/70 text-white cursor-pointer text-sm">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/login">
          <SignedOut>
            <button className="flex gap-1 items-center px-4 py-2 rounded-[2rem] bg-gradient-to-r from-blue-400 to-blue-600 text-white cursor-pointer text-sm">
              Log in
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
