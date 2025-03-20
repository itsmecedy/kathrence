import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useCart } from "../../context/CartContext"; // Import useCart
import Cart from "../features/Cart";

export default function Navigation() {
  const { cart } = useCart(); // Get cart items count
  const navItems = [
    { label: "BLOGS", path: "/blogs" },
    { label: "PRODUCTS", path: "/products" },
    { label: "CONTACT US", path: "/contact" },
    { label: "ABOUT US", path: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    const handleScroll = () => {
      setIsScrollingUp(window.scrollY <= 50 || window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed left-0 top-0 z-40 w-full bg-white shadow-md transition-transform duration-300 ${
          isScrollingUp
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="wrapper flex items-center justify-between px-8 py-6">
          <Link to="/" className="text-2xl font-bold">
            KathRence
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden gap-8 md:flex">
            {navItems.map(({ label, path }, index) => (
              <li key={index} className="text-xl hover:underline">
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="hidden gap-4 md:flex">
            <Link className="flex items-center gap-1 text-2xl">
              <IoPerson /> LOGIN
            </Link>
            <button
              className="relative flex items-center text-3xl"
              onClick={() => setIsCartOpen(true)}
            >
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-sm text-white">
                  {cart.length}
                </span>
              )}
            </button>
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
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 z-50 flex h-full w-3/4 flex-col bg-[#8FBACC] p-6 shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-2xl"
            >
              <AiOutlineClose />
            </button>
            <ul className="mt-4 space-y-4">
              {navItems.map(({ label, path }, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="block text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-end bg-black bg-opacity-50">
          <div className="relative w-80 rounded-l-lg bg-white p-4 shadow-lg">
            <button
              className="absolute right-2 top-2 text-2xl"
              onClick={() => setIsCartOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <Cart closeCart={() => setIsCartOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
