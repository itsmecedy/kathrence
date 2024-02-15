import React from "react";
import { Carousel } from "@material-tailwind/react";
import toy from "../assets/toy.webp";

export default function Blogs() {
  return (
    <div className=" wrapper test h-screen">
      <Carousel transition={{ duration: 1 }}  className="rounded-xl">
        <img src={toy} alt="image 1" className="h-full w-full object-cover" />
        <img src={toy} alt="image 2" className="h-full w-full object-cover" />
        <img src={toy} alt="image 3" className="h-full w-full object-cover" />
      </Carousel>
    </div>
  );
}
