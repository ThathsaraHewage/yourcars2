import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Custom_Button } from ".";

const Navbar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <Custom_Button
        title="Sign in"
        btnType="button"
        containerStyle="text-black rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default Navbar;
