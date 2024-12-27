"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import logo from "@/public/shared/logo.svg";
import Image from "next/image";
import Modal from "./Modal";

function Header() {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 sm:px-10 md:relative md:w-full md:justify-end md:px-0">
      <Link
        href="/"
        className="left-0 top-6 z-50 md:flex md:w-36 md:flex-row md:items-center md:justify-center lg:absolute lg:w-[48%] lg:gap-12 lg:pl-12"
      >
        <Image src={logo} alt="Star image" className="h-12 w-12" />

        <div className="md:block lg:h-[0.5px] lg:w-full lg:bg-white-0"></div>
      </Link>

      <Modal setNavShow={setNavShow} />

      <Navigation navShow={navShow} setNavShow={setNavShow} />
    </div>
  );
}

export default Header;
