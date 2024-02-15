import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FilterComponent from "./components/FilterComponent";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <FilterComponent /> */}
    </div>
  );
}

export default App;
