import React from "react";
import aboutBg from "../assets/about/about-bgImg.avif"; // Import the background image

export default function About() {
  return (
    <div
      className="h-full flex items-center justify-center w-full border border-red-400"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-80 mx-auto lg:max-w-4xl p-8 text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">About KathRence</h2>
        <p className="text-lg">
          Welcome to <strong>KathRence Pet Supplies</strong>, your premier
          destination for dog and cat essentials in Metro Manila! Located at{" "}
          <strong>
            2991 Kaalinsabay St., Karangalan Village, Manggahan, Pasig City,
          </strong>{" "}
          we specialize in providing top-quality supplies for your beloved furry
          companions. From nutritious food and irresistible treats to toys,
          accessories, and premium cat litters.
        </p>

        {/* Google Maps */}
        <div className="mt-6 w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1740584695109!6m8!1m7!1stzXaiRnACU9_0hBPxgoStQ!2m2!1d14.60269915914742!2d121.1009523229222!3f240.2649124775323!4f-9.502245866917235!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
