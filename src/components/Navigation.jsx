import React, { useState, useEffect } from "react";
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
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="navigation">
      <div className="wrapper">
        <div className=" flex justify-between items-center">
          <div className=" text-2xl">
            <Link to="/">KathRence</Link>
          </div>
          {isMobileView ? (
            // Mobile view toggle button
            <div className="lg:hidden text-2xl flex items-center ml-auto">
              <button onClick={toggleMenu} type="button" className="">
                <AiOutlineMenu />
              </button>
            </div>
          ) : (
            // Desktop view navigation
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
          )}
          {/* Right side navigation */}
          <div className="gap-3">
            {!isMobileView && (
              // Desktop view login and cart
              <div className="hidden md:flex gap-3">
                <Link className="text-2xl flex items-center gap-1">
                  <IoPerson /> LOGIN
                </Link>
                <Link className="text-2xl flex items-center">
                  <FaShoppingCart />
                </Link>
              </div>
            )}

            {/* Mobile Navigation when menu is open */}
            {isOpen && isMobileView && (
              <ul className="absolute flex flex-col items-end z-100 h-full  z-10 bg-[#8FBACC] right-0 top-0">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-2xl pr-4 py-1"
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
    </div>
  );
}
