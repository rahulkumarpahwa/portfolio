"use client";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#51abb2] text-white py-12 dark:bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            <span>
              <Link
                className="flex items-center justify-center sm:justify-start gap-2 py-1"
                 href={"/"}
              >
                <Image
                  src="/favicon.ico"
                  alt="Portfolio Logo"
                  className="dark:invert"
                  width={30}
                  height={24}
                  priority
                />
                <span>Portfolio</span>
              </Link>
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#timeline"
                className="hover:text-white transition-colors duration-300"
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href="/#connect"
                className="hover:text-white transition-colors duration-300"
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col items-center sm:items-start">
            <a
              href="https://linkedin.com/in/rahulkumarpahwa"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://x.com/rahulkumarpahwa"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              X (Twitter)
            </a>
            <a
              href="https://github.com/rahulkumarpahwa"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email: rahulkumarpahwa@gmail.com</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2025-26 RahulKumarPahwa . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
