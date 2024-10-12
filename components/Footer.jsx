import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import customFonts from "@/app/font";
import Link from "next/link";
import { px } from "framer-motion";
export default function Footer() {
  return (
    <footer className="bg-[#FCF8F3] text-white py-8">
      <div className="container mx-auto text-center px-16">
        <div className="flex flex-row mx-auto items-center justify-between gap-2">
          <div>
            <Link href="/">
              <span
                className={`text-gray-400 hover:text-[#000000] text-3xl ${customFonts.work_sans.className}`}
              >
                Kumaon
              </span>
              <span
                className={`text-gray-400 hover:text-[#000000]  text-3xl ${customFonts.work_sans.className}`}
              >
                Plaza
              </span>
            </Link>
          </div>

          <div className="text-gray-400 flex flex-row gap-4">
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              STAY
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              EXPERIENCE
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              GALLERY
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              OFFERS
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              ABOUT
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              CONTACT
            </a>
          </div>
          {/** social icons */}
          <div className="flex flex-row gap-4">
            <a href="#" className="text-gray-400 hover:text-[#000000]">
              <FaInstagram size="25px" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#000000]">
              <FaFacebook size="25px" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#000000]">
              <FaYoutube size="25px" />
            </a>
          </div>
        </div>
        {/* Logo and Navigation
        <div className="flex flex-col items-center">
          <div className="mb-4">
            {/* Add your logo image here */}
        {/* <Link href="/">
              <span
                className={`text-gray-400 hover:text-[#000000] text-3xl ${customFonts.work_sans.className}`}
              >
                Kumaon
              </span>
              <span
                className={`text-gray-400 hover:text-[#000000]  text-3xl ${customFonts.work_sans.className}`}
              >
                Plaza
              </span>
            </Link>
          </div>
          {/* Navigation links */}
        {/* <div className="space-x-8 text-gray-400">
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              STAY
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              EXPERIENCE
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              GALLERY
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              OFFERS
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              ABOUT
            </a>
            <a
              href="#"
              className={`hover:text-[#000000] text-sm md:text-xl ${customFonts.work_sans.className}`}
            >
              CONTACT
            </a>
          </div>
        </div>  */}

        {/* Social Icons */}
        {/* <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-[#000000]">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#000000]">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#000000]">
            <FaYoutube />
          </a>
        </div> */}

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-700 mt-6 pt-4 relative">
          <div className="absolute inset-0 bg-[#FCF8F3] shadow-sm transform -translate-y-1" />
          <p className="text-gray-400 text-[12px] sm:text-sm relative z-20">
            Kumaon Palaza all rights reserved © {new Date().getFullYear()} |
            Developed and Maintained by{" "}
            <a href="#" className="hover:text-[#000000]">
              dtc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
