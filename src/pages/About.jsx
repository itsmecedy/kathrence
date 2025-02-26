import React from "react";

export default function About() {
  return (
    <div className="wrapper">
      <div className=" mx-auto lg:max-w-4xl py-8 text-center space-y-10">
        <h2 className="text-3xl font-bold mb-4 text-center ">
          About KathRence
        </h2>
        <div>
          <p className=" text-lg">
            Welcome to <strong>KathRence Pet Supplies</strong> , your premier
            destination for dog and cat essentials in Metro Manila! Located at{" "}
            <strong>
              2991 Kaalinsabay St., Karangalan Village, Manggahan, Pasig City,
            </strong>
            we specialize in providing top-quality supplies for your beloved
            furry companions. From nutritious food and irresistible treats to
            toys, accessories, and premium cat litters. And with our commitment
            to offering the lowest prices, you can shop with confidence knowing
            you're getting the best value for your money. Visit us today and
            treat your pets to the finest products at Kathrence Pet Supplies!
          </p>
        </div>
          <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1740584695109!6m8!1m7!1stzXaiRnACU9_0hBPxgoStQ!2m2!1d14.60269915914742!2d121.1009523229222!3f240.2649124775323!4f-9.502245866917235!5f0.7820865974627469"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
    </div>
  );
}
