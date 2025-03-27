"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="home" className="w-24 md:w-32">
      <Link href={"/"}>
        <Image
          onClick={scrollToTop}
          src="/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-full"
        />
      </Link>
    </div>
  );
};

export default Logo;
