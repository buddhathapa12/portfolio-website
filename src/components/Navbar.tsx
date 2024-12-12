import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className="fill-emerald-800 text-5xl mt-1 bg-slate-300 justify-evenly flex">
      <li className="hover:bg-red-300">
        <Link href={"/"} className="mr-1">
          Home
        </Link>
      </li>
      <li>
        <Link href={"#about"} className="mr-1">
          About
        </Link>
      </li>
      <li>
        <Link href={"#resume"}>Resume</Link>
      </li>
      <li>
        <Link href={"#portfolio"}>Portfolio</Link>
      </li>
      <li>
        <Link href={"#blog"}>Blog</Link>
      </li>
    </ul>
  );
};

export default Navbar;
