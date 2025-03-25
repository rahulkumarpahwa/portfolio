"use client";
import Image from "next/image";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home" className="w-[10%]">
      <Image
        onClick={scrollToTop}
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
