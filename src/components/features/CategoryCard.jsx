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
    <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105"
        >
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-40 w-full rounded object-cover"
          />
          <h2 className="text-lg font-semibold">{category.name}</h2>
          <button
            className="rounded-lg bg-tomato px-4 py-2 text-white hover:bg-hoverTomato"
            onClick={() =>
              navigate(
                `/products?category=${encodeURIComponent(category.name)}`,
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
