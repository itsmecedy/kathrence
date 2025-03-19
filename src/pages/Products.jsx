import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import Loading from "../components/ui/Loading"; // ✅ Import Loading component
import { useCart } from "../context/CartContext"; // Import useCart hook

export default function Products() {
  const { addToCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get("category");

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(categoryFromURL || "ALL");
  const [sortBy, setSortBy] = useState("name");

  // Simulate loading effect
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate API delay (1s)
  }, [categoryFromURL]);

  useEffect(() => {
    if (categoryFromURL) {
      setCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  // Update URL when category changes
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    navigate(`/products?category=${encodeURIComponent(cat)}`);
  };

  const filteredProducts = products.filter(
    (product) =>
      (category === "ALL" || product.category === category) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.price - b.price,
  );

  return (
    <div className="mt-20">
      {/* ✅ Show Loading Component Until Fully Loaded */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* ✅ Category Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 bg-saffron px-5 py-3">
            {[
              "ALL",
              "Pet Food",
              "Pet Toys",
              "Pet Grooming",
              "Pet Accessories",
              "Pet Health",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`rounded px-4 py-2 transition ${
                  category === cat
                    ? "bg-tomato text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
            <input
              type="text"
              placeholder="Search..."
              className="rounded border px-3 py-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* ✅ Product List */}
          <div className="bg-slate-50 h-screen w-full pt-5">
            <div className="mb-3 flex items-center justify-between px-5">
              <div>
                <b>{sortedProducts.length}</b> Products
              </div>
              <select
                className="rounded px-2 py-1 outline-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>

            {/* ✅ Products Grid */}
            <div className="grid grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 drop-shadow-md transition-transform hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mb-4 h-auto w-full object-cover"
                  />
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-600">&#x20B1; {product.price}</p>
                  <button
                    className="w-full rounded-lg bg-tomato py-1 text-white hover:bg-hoverTomato"
                    onClick={() => addToCart(product)} // Add product to cart
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
