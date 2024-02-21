import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navigation() {
  const navItems = [
    { label: "BLOGS", path: "/blogs" },
    { label: "ALL PRODUCTS", path: "/allProducts" },
    { label: "CONTACT US", path: "/contact" },
    { label: "ABOUT US", path: "/about" },
  ];
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
          <ul className="hidden lg:flex md:flex-row gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-xl py-5 hover:underline hover:scale-105"
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
          {/* end of desktop view navigation */}

          {/* enclosed in a div so when in a mobile nav login and cart will not be in the middle, and will be beside with mobile menu toggle button */}
          <div className="gap-3">
            {/* right nav */}
            <div className="hidden md:flex gap-3">
              <Link className="text-2xl flex items-center gap-1">
                <IoPerson /> LOGIN
              </Link>
              <Link className="text-2xl flex items-center">
                <FaShoppingCart />
              </Link>
            </div>

            {/* Mobile menu toggle button( X =>  ☰ ) */}
            <div className="lg:hidden text-2xl flex items-center">
              <button onClick={toggleMenu} type="button" className="">
                <AiOutlineMenu />
              </button>
            </div>
            {/* Mobile Navigation when menu is open */}
            {isOpen && (
              <ul className=" absolute flex flex-col items-end test2 z-100 h-full  z-10 bg-[#8FBACC] right-0 top-0">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className=" text-2xl pr-4 py-1"
                >
                  <AiOutlineClose />
                </button>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={toggleMenu}
                    className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                  >
                    <Link
                      to={item.path}
                      className=" py-2 text-base font-medium hover:bg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* TODO:
         fix mobile responsive navigation 
         make an object so moobile and web view nav will not repeat it nav items and design/css */}
    </div>
  );
}
