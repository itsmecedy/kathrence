import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import Loading from "../components/ui/Loading"; // ✅ Import Loading component

export default function Products() {
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
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.price - b.price
  );

  return (
    <div className="mt-20">
      {/* ✅ Show Loading Component Until Fully Loaded */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* ✅ Category Filter Navigation */}
          <div className="bg-saffron flex flex-wrap justify-center items-center px-5 py-3 gap-4">
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
                className={`px-4 py-2 rounded transition ${
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
              className="outline-none px-3 py-2 rounded border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* ✅ Product List */}
          <div className="h-screen bg-slate-50 w-full pt-5">
            <div className="flex justify-between items-center mb-3 px-5">
              <div>
                <b>{sortedProducts.length}</b> Products
              </div>
              <select
                className="outline-none px-2 py-1 rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>

            {/* ✅ Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-5">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg drop-shadow-md p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover mb-4"
                  />
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-center text-sm">{product.description}</p>
                  <p className="text-gray-600">&#x20B1; {product.price}</p>
                  <p>
                    ★★★★☆ ({product.rating}) <span>({product.reviews})</span>
                  </p>
                  <button className="w-full bg-tomato text-powder py-1 rounded-lg hover:bg-hoverTomato">
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
