"use client";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#51abb2] p-8 shadow-xl dark:bg-black">
      <div className="w-20">
        <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-full" />
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
