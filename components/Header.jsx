"use client";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import customFonts from "@/app/font";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("in toggle menu");
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-customBg px-4 sticky z-50 top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-2 py-2 sm:px-8 sm:py-8">
        <div className="flex items-center">
          {/**
           * TODO: <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
           */}
          <Link href="/">
            <span
              className={`text-[#e9c46a] text-3xl ${customFonts.work_sans.className}`}
            >
              Kumaon
            </span>
            <span
              className={`text-[#f4a261] text-3xl ${customFonts.work_sans.className}`}
            >
              Plaza
            </span>
          </Link>
        </div>

        {/* Links for Large Screens */}
        <div className="hidden lg:flex space-x-6 items-center justify-center">
          <Link
            href="/"
            className={`text-customText text-lg hover:text-customHover ${customFonts.work_sans.className}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-customText text-lg hover:text-customHover ${customFonts.work_sans.className}`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`text-customText text-lg hover:text-customHover ${customFonts.work_sans.className}`}
          >
            Gallery
          </Link>
          <Link
            href="/portfolio"
            className={`text-customText text-lg hover:text-customHover ${customFonts.work_sans.className}`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className={`text-xl font-bold hover:text-customHover ${customFonts.work_sans.className}`}
          >
            <Button
              variant="outline"
              className="shadow-md font-semibold text-lg"
            >
              <span>Book Now</span>
              <FaArrowRight className="ml-2 text-lg" />
            </Button>
          </Link>
        </div>

        {/* Hamburger Menu for Small and Medium Screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <MenuIcon className="h-6 w-6 text-customText" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-customBg p-4">
          <Link
            href="/"
            className="block text-customText hover:text-customHover"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-customText hover:text-customHover"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-customText hover:text-customHover"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="block text-customText hover:text-customHover"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="block text-customText hover:text-customHover"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
