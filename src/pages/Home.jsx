import React from "react";
import { Carousel } from "@material-tailwind/react";
import CategoryCard from "../components/features/CategoryCard";
import NewArrivals from "../components/features/NewArrivals";

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
      <div className=" border border-red-600 flex justify-center items-center text-center flex-col pt-10 w-2/3 mx-auto">
        <p className=" text-3xl font-medium pb-5">Explore with Us</p>
        <p>
          At Posh Pets, we believe your furry friends deserve the best! Our
          store is dedicated to providing premium pet products, from nutritious
          food and tasty treats to playful toys, cozy clothes, and stylish
          accessories. We prioritize quality, comfort, and happiness, ensuring
          your pets stay healthy, entertained, and pampered. Explore our
          carefully curated collections and treat your pets to the love and care
          they truly deserve!
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 my-5 rounded-full hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
      <NewArrivals />
      <CategoryCard />
    </div>
  );
}
