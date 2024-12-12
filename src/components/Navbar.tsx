import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <Link href={"/"}>Home</Link>
      <Link href={"#about"}>About</Link>
      <Link href={"#resume"}>Resume</Link>
      <Link href={"#portfolio"}>Portfolio</Link>
      <Link href={"#blog"}>Blog</Link>
    </div>
  );
};

export default Navbar;
