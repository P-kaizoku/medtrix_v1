import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const ContactUsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-3" size={20} />
              <p className="text-gray-700">
                B.V.C.O.E Paschim Vihar
                <br />
                Delhi, Delhi, India
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-blue-500 mr-3" size={20} />
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:[Your Email Address]"
                  className="text-blue-500 hover:underline"
                >
                  medrix@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <FaPhone className="text-blue-500 mr-3" size={20} />
              <p className="text-gray-700">
                Phone:{" "}
                <a
                  href="tel:[Your Phone Number]"
                  className="text-blue-500 hover:underline uppercase"
                >
                  xxx-xxx-xxxx
                </a>
              </p>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="[Your LinkedIn Link]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="[Your Twitter Link]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
