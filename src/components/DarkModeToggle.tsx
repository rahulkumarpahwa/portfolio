"use client";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const changeTheme = () => {
    const sun: any = document.querySelector(".sun");
    const moon: any = document.querySelector(".moon");
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.toggle("dark");
      moon.classList.add("hidden");
      sun.classList.remove("hidden");
    } else {
      document.documentElement.classList.toggle("dark");
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <IoIosSunny
        className="sun text-2xl md:text-3xl bg-white rounded-full border-black border p-1 cursor-pointer"
        onClick={changeTheme}
      />
      <IoIosMoon
        className="moon hidden text-2xl md:text-3xl bg-black text-white rounded-full border border-white p-1 cursor-pointer"
        onClick={changeTheme}
      />
    </div>
  );
};

export default DarkModeToggle;
