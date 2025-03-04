import React from "react";
import { Link } from "react-router-dom";
import asd from "../assets/home/contact-img1.jpg";

const NewArrivals = () => {
  return (
    <section className="p-4 ">
      <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Example of a product card */}
        <div className="border p-2 rounded-lg shadow-md flex flex-col items-center">
          <img src={asd} alt="Product" className="w-full h-40 object-cover" />
          <Link
            to="/Products"
            className="text-lg font-semibold mt-2 cursor-pointer underline"
          >
            Go to About Page
          </Link>
          <div className=" flex space-x-2">
            <p className="text-gray-600 line-through">₱999.00</p>
            <p className="text-gray-800">₱699.00</p>
          </div>
        </div>
        <div className="border p-2 rounded-lg shadow-md flex flex-col items-center">
          <img src={asd} alt="Product" className="w-full h-40 object-cover" />
          <Link
            to="/Products"
            className="text-lg font-semibold mt-2 cursor-pointer underline"
          >
            Go to About Page
          </Link>
          <div className=" flex space-x-2">
            <p className="text-gray-600 line-through">₱999.00</p>
            <p className="text-gray-800">₱699.00</p>
          </div>
        </div>
        {/* Add more product cards here */}
      </div>
    </section>
  );
};

export default NewArrivals;
