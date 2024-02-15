import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="wrapper">
        <div className=" flex justify-between items-center">
          <div className=" text-2xl">
            <Link to="/">KathRence</Link>
          </div>
          <ul className="flex flex-row gap-6">
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/about">About</Link>
            </li>
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="text-xl py-5 hover:underline hover:scale-105">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex text-2xl gap-3">
            <div className=" text-gray flex items-center gap-1">
              <IoPerson /> LOGIN
            </div>  
            <div className=" text-green flex items-center">
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
