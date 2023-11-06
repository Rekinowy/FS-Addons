"use client";

import { FaMapLocationDot } from "react-icons/fa6";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex-center flex-col fixed z-20 w-full bg-black-100 border-b-2 border-black-300 text-gray-100">
        <div className="relative flex-between w-full max-w-screen-2xl p-4 sm:p-8 bg-black-100">
          <Link href="/" className=" w-[120px] sm:w-[150px]">
            <Image src="/logo.png" alt="Logo" width={150} height={43} />
          </Link>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex-center rounded-md sm:hidden"
          >
            {isMenuOpen ? (
              <MdClose className="w-8 h-8" />
            ) : (
              <MdMenu className="w-8 h-8" />
            )}
          </button>

          <ul className="flex items-center gap-x-8 text-lg max-sm:hidden">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
            <li className="ml-8">
              <Link
                href="/map"
                className="flex-center gap-2 text-gradient_blue font-semibold"
              >
                <FaMapLocationDot className="text-[#4c73ff] w-5 h-5" />
                Map
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`sm:hidden w-full absolute -z-10 bg-black-200 border-b-2 border-black-300 ${
            isMenuOpen ? "top-16" : "-top-72"
          } transition-all duration-300`}
        >
          <ul className="flex-center flex-col text-lg">
            {links.map((link) => (
              <li key={link.label} className="w-3/4 h-20">
                <Link
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full h-full flex-center"
                >
                  {link.label}
                </Link>
                <div className="w-3/4 border-t border-black-300"></div>
              </li>
            ))}
            <li className="w-3/4 h-20">
              <Link
                href="/map"
                onClick={() => setIsMenuOpen(false)}
                className="flex-center w-full h-full gap-2 text-gradient_blue font-semibold"
              >
                <FaMapLocationDot className="text-[#4c73ff] w-5 h-5" />
                Map
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed sm:hidden bg-black ${
          isMenuOpen ? "bg-opacity-70 w-screen h-screen" : "bg-opacity-0"
        } z-10 pointer-events-auto transition-all duration-300`}
      />
    </>
  );
};
export default Navbar;
