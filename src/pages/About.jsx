import React from "react";

export default function About() {
  return (
    <div className="flex h-screen w-full flex-col justify-center">
      <div className="wrapper mx-auto mt-20 rounded-lg bg-white bg-opacity-80 p-8 text-center shadow-lg lg:max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold">KathRence</h2>
        <p className="text-lg">
          Welcome to <strong>KathRence Pet Supplies</strong>, your go-to
          destination for premium dog and cat essentials in Metro Manila! Our
          name, <strong>KathRence</strong>, is inspired by the names
          <strong>Kathlene</strong> and <strong>Florence</strong>, reflecting
          our passion and commitment to pet care. Conveniently located at
          <strong>
            2991 Kaalinsabay St., Karangalan Village, Manggahan, Pasig City
          </strong>
          , we offer a carefully curated selection of high-quality pet supplies—
          from nutritious food and irresistible treats to fun toys, stylish
          accessories, and premium cat litter. Because at KathRence, we believe
          every pet deserves the best! 🐶🐱
        </p>

        {/* Google Maps */}
        <div className="mt-6 h-96 w-full">
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
