"use client";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-[#51abb2] p-6 md:p-8 shadow-xl dark:bg-black">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center md:hidden gap-4">
          <DarkModeToggle />
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center justify-center gap-6 md:gap-10 dark:text-white">
          <ul className="flex flex-wrap items-center gap-6 md:gap-10">
            <li>
              <a
                href="#timeline"
                className="hover:text-[#e26639] transition-colors duration-300"
              >
                Journey
              </a>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#e26639] transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href="#connect"
                className="hover:text-white transition-colors duration-300"
              >
                Connect
              </a>
            </li>
            {/* <li>
              <Link
                href={"/try"}
                className="hover:text-white transition-colors duration-300"
              >
                Try
              </Link>
            </li> */}
            <li>
              <a
                href="./rahulkumar.pdf"
                download
                className="flex gap-2 items-center justify-center hover:text-[#e26639] transition-colors duration-300"
              >
                <AiOutlineCloudDownload className="font-bold text-xl" />
                <span>CV</span>
              </a>
            </li>
          </ul>
          {/* DarkModeToggle aligned with nav items */}
          <DarkModeToggle />
        </div>
      </div>
      {/* Dropdown Menu for Small Devices */}
      {isMenuOpen && (
        <div
          ref={dropdownRef}
          className={`w-3/4 sm:w-1/2 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col gap-4 text-center text-black dark:text-white">
            <li className="hover:bg-[#e26639] hover:text-white transition-colors duration-300 px-4 py-2 rounded-md">
              <a href="/#timeline" className="block w-full">
                Journey
              </a>
            </li>
            <li className="hover:bg-[#e26639] hover:text-white transition-colors duration-300 px-4 py-2 rounded-md">
              <a href="/projects" className="block w-full">
                Projects
              </a>
            </li>
            <li className="hover:bg-[#e26639] hover:text-white transition-colors duration-300 px-4 py-2 rounded-md">
              <a href="/#connect" className="block w-full">
                Connect
              </a>
            </li>
            <li className="hover:bg-[#e26639] hover:text-white transition-colors duration-300 px-4 py-2 rounded-md">
              <a
                href="./rahulkumar.pdf"
                download
                className="flex gap-2 items-center justify-center w-full"
              >
                <AiOutlineCloudDownload className="font-bold text-xl" />
                <span>CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
