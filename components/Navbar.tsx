import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { UserButton ,SignedIn } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 ">
      <Link className="flex items-center gap-1 " href="/">
        <Image src="/icons/logo.svg" width={32} height={32} alt="Yoom logo" />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk Management Auth */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;