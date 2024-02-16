import React from "react";
import { Carousel } from "@material-tailwind/react";
import banner from "../assets/asd.png";

export default function home() {
  return (
    <div className="wrapper test h-screen">
      <div className="h-80">
        <Carousel transition={{ duration: 1 }} autoplay={true}>
          <img
            src={banner}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={banner}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={banner}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>


      {/* its responsive, 
          todo: 
            make navigation responsive. 
            fix description mote in in img maybe when you hover there is a view detail and have modal for details and descriptions */}
    </div>
  );
}
