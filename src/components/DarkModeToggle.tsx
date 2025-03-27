"use client";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize theme based on the current document state
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  const changeTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isDarkMode ? (
        <IoIosSunny
          className="text-2xl md:text-3xl bg-white text-black rounded-full border-black border p-1 cursor-pointer"
          onClick={changeTheme}
        />
      ) : (
        <IoIosMoon
          className="text-2xl md:text-3xl bg-black text-white rounded-full border border-white p-1 cursor-pointer"
          onClick={changeTheme}
        />
      )}
    </div>
  );
};

export default DarkModeToggle;
