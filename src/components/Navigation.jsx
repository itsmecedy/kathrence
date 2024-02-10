import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className=" wrapper">
      <nav className=" flex justify-between">
        <div>
          <Link to="/">KathRence</Link>
        </div>
        <ul className=" flex flex-row">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
