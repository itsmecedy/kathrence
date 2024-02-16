import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation">
      <div className="wrapper">
        <div className=" flex justify-between items-center">
          <div className=" text-2xl">
            <Link to="/">KathRence</Link>
          </div>

          {/* desktop view middle and right side navigation */}
          <ul className="hidden md:flex md:flex-row gap-6">
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/blogs">BLOGS</Link>
            </li>
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/allProducts">ALL PRODUCTS</Link>
            </li>
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
          {/* right nav */}
          <div className="hidden md:flex md:text-2xl gap-3">
            <Link className=" text-gray flex items-center gap-1">
              <IoPerson /> LOGIN
            </Link>
            <Link className=" text-green flex items-center">
              <FaShoppingCart />
            </Link>
          </div>
          {/* end of desktop view navigation */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} type="button" className="">
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          {/* Mobile Navigation when menu is open */}
          {isOpen && <ul className="md:hidden">nav mobile</ul>}
        </div>
      </div>
      {/* TODO:
         fix mobile responsive navigation 
         make an object so moobile and web view nav will not repeat it nav items and design/css */}
    </div>
  );
}
