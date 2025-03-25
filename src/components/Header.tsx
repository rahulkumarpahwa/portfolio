"use client";
import DarkModeToggle from "./DarkModeToggle";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#51abb2] p-8 shadow-xl dark:bg-black">
      <Logo />
      <ul className="flex items-center justify-center gap-10 dark:text-white ">
        <li>
          <a href="#timeline">Journey</a>
        </li>
        <li>Projects</li>
        <li>Try</li>
        <li>
          <a href="#education"></a>Education
        </li>
        <li>
          <a href="#connect">Connect</a>
        </li>
        <li>
          <a
            href="./rahulkumar.pdf"
            download
            className="flex gap-2 items-center justify-center"
          >
            <AiOutlineCloudDownload className="font-bold text-xl" />{" "}
            <span>CV</span>
          </a>
        </li>
      </ul>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
