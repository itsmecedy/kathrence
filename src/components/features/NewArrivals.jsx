import React from "react";
import { Link } from "react-router-dom";
import asd from "../../assets/asd.png";

const NewArrivals = () => {
  return (
    <section className="p-4 ">
      <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Example of a product card */}
        <Link to="/Products">
          <div className="rounded-lg p-2 shadow-md flex flex-col items-center hover:scale-105 transition-transform ">
            <img
              src={asd}
              alt="Product"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <p className="text-lg font-semibold mt-2 cursor-pointer underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className=" flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>
        <Link to="/Products">
          <div className="rounded-lg p-2 shadow-md flex flex-col items-center hover:scale-105 transition-transform ">
            <img
              src={asd}
              alt="Product"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <p className="text-lg font-semibold mt-2 cursor-pointer underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className=" flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>
        <Link to="/Products">
          <div className="rounded-lg p-2 shadow-md flex flex-col items-center hover:scale-105 transition-transform ">
            <img
              src={asd}
              alt="Product"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <p className="text-lg font-semibold mt-2 cursor-pointer underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className=" flex space-x-2">
              <p className="text-gray-600 line-through">₱999.00</p>
              <p className="text-gray-800">₱699.00</p>
            </div>
          </div>
        </Link>
        <Link to="/Products">
          <div className="rounded-lg p-2 shadow-md flex flex-col items-center hover:scale-105 transition-transform ">
            <img
              src={asd}
              alt="Product"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <p className="text-lg font-semibold mt-2 cursor-pointer underline">
              Lorem ipsum dolor sit amet.
            </p>
            <div className=" flex space-x-2">
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
