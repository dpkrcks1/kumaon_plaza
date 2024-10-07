"use client";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import customFonts from "@/app/font";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("in toggle menu");
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-customBg p-4">
      <div className="container mx-auto flex items-center justify-between px-2 py-2 sm:px-8 sm:py-8">
        <div className="flex items-center">
          {/**
           * TODO: <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" />
           */}
          <Link href="/">
            <span
              className={`text-[#e9c46a] text-3xl ${customFonts.libre.className}`}
            >
              Kumaon
            </span>
            <span
              className={`text-[#f4a261] text-3xl ${customFonts.marker.className}`}
            >
              Palaza
            </span>
          </Link>
        </div>

        {/* Links for Large Screens */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-customText hover:text-customHover">
            Home
          </Link>
          <Link
            href="/about"
            className="text-customText hover:text-customHover"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-customText hover:text-customHover"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-customText hover:text-customHover"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-customText hover:text-customHover"
          >
            Contact
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
