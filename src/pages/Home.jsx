import React from "react";
import { Link } from "react-router-dom";
import toy from "../assets/toy.webp";

export default function home() {
  const products = [
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image: toy,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae.",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image: toy,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae.",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      image: toy,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 40,
      image: toy,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae.",
    },
  ];

  return (
    <div className="">
      <div className="filterNavigation bg-saffron flex justify-center items-center px-5 py-3 gap-10">
        <div className="flex justify-center items-center gap-10">
          <Link to="/">ALL</Link>
          <Link to="/">DOGS</Link>
          <Link to="/">CATS</Link>
          <Link to="/">FISH &amp; AQuatics</Link>
          <Link to="/">BIRDS</Link>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className=" outline-none capitalize px-2 py-1 rounded-lg"
        />
      </div>
      {/* filter end */}
      <div className="wrapper">
        <div className=" h-screen bg-slate-50 drop-shadow-2xl  mt-5">
          <div className="test flex justify-between items-center">
            <p>
              <b>100</b> Products
            </p>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-fit "
            >
              <option defaultValue>Recommended</option>
              <option value="newest">Newest</option>
              <option value="price-low-high">Price (Low to High)</option>
              <option value="price-high-low">Price (High to Low)</option>
              <option value="name-az">Name A-Z</option>
              <option value="name-za">Name Z-A</option>
            </select>
          </div>
          {/* product */}
          <div className="container mx-auto py-8 px-4 test">
            {/* products start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 test">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center gap-1 test">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">&#x20B1; {product.price}</p>
                    <p>★★★★☆ </p>
                    <div className=" flex w-full px-2 text-xl">
                      <button>-</button>
                      <div className=" flex flex-1 justify-center">1</div>
                      <button>+</button>
                    </div>
                    <button className="w-full bg-tomato text-powder py-1 rounded-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
