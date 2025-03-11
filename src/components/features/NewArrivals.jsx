import React from "react";
import { Link } from "react-router-dom";
import asd from "../../assets/asd.png";

const NewArrivals = () => {
  return (
    <section className="p-4">
      <h2 className="mb-4 text-xl font-bold">New Arrivals</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Example of a product card */}
        <Link to="/Products">
          <div className="flex flex-col items-center rounded-lg p-2 shadow-md transition-transform hover:scale-105">
            <img
              src={asd}
              alt="Product"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <p className="mt-2 cursor-pointer text-lg font-semibold underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>
        <Link to="/Products">
          <div className="flex flex-col items-center rounded-lg p-2 shadow-md transition-transform hover:scale-105">
            <img
              src={asd}
              alt="Product"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <p className="mt-2 cursor-pointer text-lg font-semibold underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>
        <Link to="/Products">
          <div className="flex flex-col items-center rounded-lg p-2 shadow-md transition-transform hover:scale-105">
            <img
              src={asd}
              alt="Product"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <p className="mt-2 cursor-pointer text-lg font-semibold underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>
        <Link to="/Products">
          <div className="flex flex-col items-center rounded-lg p-2 shadow-md transition-transform hover:scale-105">
            <img
              src={asd}
              alt="Product"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <p className="mt-2 cursor-pointer text-lg font-semibold underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className="flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>

        {/* add more here */}
      </div>
    </section>
  );
};

export default NewArrivals;
