import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 w-full text-gray-300 py-8">
      <div className=" mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: Company Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Medrix</h4>
          <p className="text-sm mb-2">
            B.V.C.O.E Paschim Vihar, Delhi, Delhi, India
          </p>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:[Your Email Address]"
              className="text-gray-300 hover:text-white"
            >
              medrix.example@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:[Your Phone Number]"
              className="text-gray-300 hover:text-white"
            >
              XXX-XXX-XXXX
            </a>
          </p>
        </div>

        {/* Second Column: Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>

        {/* Third Column: Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="[Your Facebook Link]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="[Your Twitter Link]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="[Your LinkedIn Link]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            {/* Add more social media links */}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 mt-8 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} Medrix. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
