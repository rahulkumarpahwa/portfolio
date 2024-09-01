"use client";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[10%]">
      <Image
        src="/logo.png"
        alt="Logo"
        width={1000}
        height={1000}
        className="w-full"
      />
    </div>
  );
};

export default Logo;
