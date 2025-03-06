import React from "react";
import { useNavigate } from "react-router-dom";
import asd from "../../assets/asd.png";

export default function HomeCategories() {
  const navigate = useNavigate();

  const categories = [
    { name: "ALL", image: asd },
    { name: "Pet Food", image: asd },
    { name: "Pet Toys", image: asd },
    { name: "Pet Grooming", image: asd },
    { name: "Pet Accessories", image: asd },
    { name: "Pet Health", image: asd },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-3 hover:scale-105 transition-transform"
        >
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-lg font-semibold">{category.name}</h2>
          <button
            className="bg-tomato text-white px-4 py-2 rounded-lg hover:bg-hoverTomato"
            onClick={() =>
              navigate(
                `/products?category=${encodeURIComponent(category.name)}`
              )
            }
          >
            Shop
          </button>
        </div>
      ))}
    </div>
  );
}
