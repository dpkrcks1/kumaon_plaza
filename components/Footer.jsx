import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import customFonts from "@/app/font";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#ccd5ae] text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            {/* Add your logo image here */}
            <Link href="/">
              <span
                className={`text-gray-400 hover:text-white text-3xl ${customFonts.libre.className}`}
              >
                Kumaon
              </span>
              <span
                className={`text-gray-400 hover:text-white  text-3xl ${customFonts.marker.className}`}
              >
                Palaza
              </span>
            </Link>
          </div>
          {/* Navigation links */}
          <div className="space-x-8 text-gray-400">
            <a href="#" className="hover:text-white text-sm md:text-xl">
              STAY
            </a>
            <a href="#" className="hover:text-white text-sm md:text-xl">
              EXPERIENCE
            </a>
            <a href="#" className="hover:text-white text-sm md:text-xl">
              GALLERY
            </a>
            <a href="#" className="hover:text-white text-sm md:text-xl">
              OFFERS
            </a>
            <a href="#" className="hover:text-white text-sm md:text-xl">
              ABOUT
            </a>
            <a href="#" className="hover:text-white text-sm md:text-xl">
              CONTACT
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-gray-700 mt-6 pt-4 relative">
          <div className="absolute inset-0 bg-[#ccd5ae] shadow-sm transform -translate-y-1" />
          <p className="text-gray-400 text-[12px] sm:text-sm relative z-20">
            Kumaon Palaza all rights reserved © {new Date().getFullYear()} |
            Developed and Maintained by{" "}
            <a href="#" className="hover:text-white">
              dtc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
