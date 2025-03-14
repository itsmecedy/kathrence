import React from "react";
import { Carousel } from "@material-tailwind/react";
import CategoryCard from "../components/features/CategoryCard";
import NewArrivals from "../components/features/NewArrivals";
import asd from "../assets/asd.png";

// Define an array of image paths
const bannerImages = [
  "/home/banner-img1.jpg",
  "/home/banner-img2.jpg",
  "/home/banner-img3.jpg",
];

export default function Home() {
  return (
    <div className="wrapper h-screen">
      <div className="mt-20 h-1/2">
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
      <div className="mx-auto flex w-2/3 flex-col items-center justify-center pt-10 text-center">
        <p className="pb-5 text-3xl font-medium">Explore with Us</p>
        <p>
          At Posh Pets, we believe your furry friends deserve the best! Our
          store is dedicated to providing premium pet products, from nutritious
          food and tasty treats to playful toys, cozy clothes, and stylish
          accessories. We prioritize quality, comfort, and happiness, ensuring
          your pets stay healthy, entertained, and pampered. Explore our
          carefully curated collections and treat your pets to the love and care
          they truly deserve!
        </p>
        <button className="my-5 rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          Read More
        </button>
      </div>
      <div className="my-10 flex justify-around gap-10">
        {["Dog", "Cat", "Fish", "Bird"].map((animal, index) => (
          <div
            key={index}
            className="h-50 relative w-full cursor-pointer overflow-hidden rounded transition-all hover:scale-105"
          >
            <img
              src={asd}
              alt={animal}
              className="flex h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-lg font-bold text-white">
              {animal}
            </div>
          </div>
        ))}
      </div>
      <NewArrivals />
      <CategoryCard />
    </div>
  );
}
