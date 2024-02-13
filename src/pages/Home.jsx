import React from "react";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <div className=" bg-saffron">
      <div className="wrapper">
        <div className=" flex justify-center items-center px-5 py-3 gap-10">
          <div className="flex justify-center items-center gap-10">
            <Link to="/">ALL</Link>
            <Link to="/">DOGS</Link>
            <Link to="/">CATS</Link>
            <Link to="/">FISH &amp; AQuatics</Link>
            <Link to="/">BIRDS</Link>
          </div>
          <input type="text" placeholder="Search..." className=" outline-none capitalize px-2 py-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
