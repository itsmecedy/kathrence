import React from "react";
import { Carousel } from "@material-tailwind/react";
import CategoryCard from "../components/ui/CategoryCard";
import NewArrivals from "../Home/NewArrivals";

// Define an array of image paths
const bannerImages = [
  "/home/banner-img1.jpg",
  "/home/banner-img2.jpg",
  "/home/banner-img3.jpg",
];

export default function Home() {
  return (
    <div className="wrapper h-screen">
      <div className="h-1/2">
        <Carousel
          transition={{ duration: 1, easing: "ease-in-out" }}
          autoplayDelay={3000}
          autoplay
          loop
        >
          {bannerImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ))}
        </Carousel>
      </div>
      <CategoryCard />
      <NewArrivals />
    </div>
  );
}
