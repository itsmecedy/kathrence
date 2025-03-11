import { useMemo } from "react";

const useFilteredProducts = (products, category, searchTerm, sortBy) => {
  return useMemo(() => {
    const filteredProducts = products.filter((product) => {
      const matchesCategory =
        category === "ALL" || product.category === category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    return filteredProducts.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });
  }, [products, category, searchTerm, sortBy]);
};

export default useFilteredProducts;
