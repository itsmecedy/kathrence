import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MessengerButton from "./components/MessengerButton";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Products = lazy(() => import("./pages/Products"));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <MessengerButton />
    </>
  );
}
