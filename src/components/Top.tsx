"use client";
import { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

   const toggleVisibility = () => {
     if (window.scrollY > 300) {
       setIsVisible(true);
     } else {
       setIsVisible(false);
     }
   };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg hover:bg-[#e26639] dark:hover:bg-[#e26639] transition duration-300"
      >
        <GoMoveToTop className="text-2xl" />
      </button>
    )
  );
};

export default Top;
