import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white backdrop-blur-2xl  flex justify-between px-6 py-4 rounded-lg shadow-md sticky top-0 z-20">
      <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text  cursor-default">
        Medrix
      </span>
      <ul className="flex items-center gap-4 text-lg  font-medium">
        <li>Providers</li>
        <li>Suppliers</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
