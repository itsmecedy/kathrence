import React, { useState } from "react";
import { Link } from "react-router-dom";
import toy from "../assets/toy.webp";
import petFood from "../assets/toy.webp";
import petToy from "../assets/toy.webp";
import petGrooming from "../assets/toy.webp";
import petAccessory from "../assets/toy.webp";
import petHealth from "../assets/toy.webp";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("ALL");
  const [sortBy, setSortBy] = useState("name");

  const products = [
    {
      id: 1,
      name: "Dog Food",
      price: 300,
      image: petFood,
      description: "High-quality dog food for all breeds.",
      category: "Pet Food",
      rating: 4.7,
      reviews: 12,
    },
    {
      id: 2,
      name: "Cat Toy",
      price: 150,
      image: petToy,
      description: "Interactive cat toy for hours of fun.",
      category: "Pet Toys",
      rating: 4.5,
      reviews: 8,
    },
    {
      id: 3,
      name: "Dog Grooming Kit",
      price: 500,
      image: petGrooming,
      description: "Complete grooming kit for dogs.",
      category: "Pet Grooming",
      rating: 4.8,
      reviews: 15,
    },
    {
      id: 4,
      name: "Cat Collar",
      price: 200,
      image: petAccessory,
      description: "Stylish and durable cat collar.",
      category: "Pet Accessories",
      rating: 4.6,
      reviews: 10,
    },
    {
      id: 5,
      name: "Dog Health Supplements",
      price: 400,
      image: petHealth,
      description: "Health supplements for dogs.",
      category: "Pet Health",
      rating: 4.9,
      reviews: 20,
    },
    {
      id: 6,
      name: "Cat Food",
      price: 250,
      image: petFood,
      description: "Premium cat food for all ages.",
      category: "Pet Food",
      rating: 4.7,
      reviews: 14,
    },
    {
      id: 7,
      name: "Dog Toy",
      price: 200,
      image: petToy,
      description: "Durable dog toy for active play.",
      category: "Pet Toys",
      rating: 4.6,
      reviews: 11,
    },
    {
      id: 8,
      name: "Cat Grooming Kit",
      price: 450,
      image: petGrooming,
      description: "Complete grooming kit for cats.",
      category: "Pet Grooming",
      rating: 4.8,
      reviews: 13,
    },
    {
      id: 9,
      name: "Dog Leash",
      price: 300,
      image: petAccessory,
      description: "Strong and comfortable dog leash.",
      category: "Pet Accessories",
      rating: 4.7,
      reviews: 12,
    },
    {
      id: 10,
      name: "Cat Health Supplements",
      price: 350,
      image: petHealth,
      description: "Health supplements for cats.",
      category: "Pet Health",
      rating: 4.9,
      reviews: 18,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "ALL" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <>
      {/* products filter navigation */}
      <div className="hidden bg-saffron lg:flex justify-center items-center px-5 py-3 gap-10">
        <div className="flex justify-center items-center gap-10">
          <Link to="/" onClick={() => setCategory("ALL")}>
            ALL
          </Link>
          <Link to="/" onClick={() => setCategory("Pet Food")}>
            PET FOOD
          </Link>
          <Link to="/" onClick={() => setCategory("Pet Toys")}>
            PET TOYS
          </Link>
          <Link to="/" onClick={() => setCategory("Pet Grooming")}>
            PET GROOMING
          </Link>
          <Link to="/" onClick={() => setCategory("Pet Accessories")}>
            PET ACCESSORIES
          </Link>
          <Link to="/" onClick={() => setCategory("Pet Health")}>
            PET HEALTH
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="outline-none capitalize px-2 py-1 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* filter end */}
      <div className="wrapper">
        <div className="h-screen bg-slate-50 w-full mt-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <b>{sortedProducts.length} </b>
              <span>Products</span>
            </div>
            {/* make a filter button by categories and sort button by name price etc... */}
            <select
              className="outline-none capitalize px-2 py-1 rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
          {/* product section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* product start */}
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg drop-shadow-md p-4 flex flex-col justify-center items-center gap-1 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover mb-4"
                />
                <p className="text-lg font-semibold mb-2">{product.name}</p>
                <p className="text-center">{product.description}</p>
                <p className="text-gray-600">&#x20B1; {product.price}</p>
                <p>
                  ★★★★☆<span>({product.rating}) </span>
                  <span>{product.reviews}</span>
                </p>
                <div className="flex w-full px-2 text-xl">
                  <button>-</button>
                  <div className="flex flex-1 justify-center">1</div>
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
