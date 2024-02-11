import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className=" bg-slate-200">
      <div className="wrapper">
        <div className=" flex justify-between test" >
          <div className=" text-2xl ">
            <Link to="/">KathRence</Link>
          </div>
          <ul className=" flex flex-row test">
            <li className="text-xl test2">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
