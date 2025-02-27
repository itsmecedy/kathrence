import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navigation() {
  const navItems = [
    { label: "BLOGS", path: "/blogs" },
    { label: "PRODUCTS", path: "/Products" },
    { label: "CONTACT US", path: "/contact" },
    { label: "ABOUT US", path: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsScrollingUp(false); // Hide on scroll down
      } else {
        setIsScrollingUp(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${
        isScrollingUp
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="wrapper flex justify-between items-center px-8 py-6">
        <Link to="/" className="text-2xl font-bold">
          KathRence
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <li key={index} className="text-xl hover:underline">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex gap-4">
          <Link className="text-2xl flex items-center gap-1">
            <IoPerson /> LOGIN
          </Link>
          <Link className="text-3xl flex items-center">
            <FaShoppingCart />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {isMobileView && (
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl md:hidden"
          >
            <AiOutlineMenu />
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed right-0 top-0 w-3/4 h-full bg-[#8FBACC] shadow-lg flex flex-col p-6 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl self-end"
              >
                <AiOutlineClose />
              </button>
              <ul className="mt-4 space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-lg block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
