import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#ccd5ae] text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            {/* Add your logo image here */}
            <span className="text-white font-semibold">Kumanon Palaza</span>
          </div>
          {/* Navigation links */}
          <div className="space-x-8 text-gray-400">
            <a href="#" className="hover:text-white">
              STAY
            </a>
            <a href="#" className="hover:text-white">
              EXPERIENCE
            </a>
            <a href="#" className="hover:text-white">
              GALLERY
            </a>
            <a href="#" className="hover:text-white">
              OFFERS
            </a>
            <a href="#" className="hover:text-white">
              ABOUT
            </a>
            <a href="#" className="hover:text-white">
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
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-gray-400 text-sm">
            Kumaon Palaza all rights reserved © 2023 | Developed and Maintained
            by{" "}
            <a href="#" className="hover:text-white">
              dtc
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
