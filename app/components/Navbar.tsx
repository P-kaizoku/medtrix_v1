import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white backdrop-blur-2xl  flex justify-between px-6 py-4 rounded-b-lg shadow-md sticky top-0 z-20">
      <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text  cursor-default">
        <a href="#">Medrix</a>
      </span>
      <ul className="flex items-center gap-4 text-lg  font-medium">
        <li>
          <a href="#provider">Providers</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#suppliers">Suppliers</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
