import React from "react";
import { Link } from "react-router-dom";
import toy from "../assets/toy.webp";

export default function Products() {
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
    {
      id: 5,
      name: "Product 5",
      price: 40,
      image: toy,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae.",
    },
  ];

  return (
    <>
      {/* products filter navigation */}
      <div className="hidden  bg-saffron lg:flex justify-center items-center px-5 py-3 gap-10">
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
          className=" outline-none capitalize px-2 py-1 rounded"
        />
      </div>
      {/* filter end */}
      <div className="wrapper">
        <div className=" h-screen bg-slate-50 w-full mt-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <b>100 </b>
              <span>Products</span>
            </div>
            {/* make a filter button by categories and sort button by name price etc... */}
          </div>
          {/* product section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* product start */}
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg drop-shadow-md p-4 flex flex-col justify-center items-center gap-1 hover:scale-105 "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover mb-4"
                />
                <p className="text-lg font-semibold mb-2">{product.name}</p>
                <p className=" text-center">{product.description}</p>
                <p className="text-gray-600">&#x20B1; {product.price}</p>
                <p>
                  ★★★★☆<span>(4.7) </span>
                  <span>12</span>
                  {/* make it dynamic */}
                </p>
                <div className=" flex w-full px-2 text-xl">
                  <button>-</button>
                  <div className=" flex flex-1 justify-center">1</div>
                  <button>+</button>
                </div>
                <button className="w-full bg-tomato text-powder py-1 rounded-lg hover:bg-hoverTomato">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {/* end of product section */}
          {/* on mobile view make a filter in left for supplies category */}
        </div>
      </div>
    </>
  );
}
