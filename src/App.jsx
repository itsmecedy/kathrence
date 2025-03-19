import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/features/Navigation";
import MessengerButton from "./components/features/MessengerButton";
import { CartProvider } from "../src/context/CartContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Products = lazy(() => import("./pages/Products"));

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <>
      <CartProvider>
        {/* Your Routes and Components */}
        <Navigation setSelectedCategory={setSelectedCategory} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Home setSelectedCategory={setSelectedCategory} />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/products"
              element={<Products selectedCategory={selectedCategory} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        <MessengerButton />
      </CartProvider>
    </>
  );
}
