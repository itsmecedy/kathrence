import React from "react";

export default function Contact() {
  return (
    <div className="wrapper">
      <div className=" mx-auto lg:max-w-4xl py-8 text-center space-y-10">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className=" text-lg">
          Have questions or need assistance? Our friendly and knowledgeable team
          is here to help! Reach out to us via cellphone at
          <strong>[insert phone number]</strong> or message us at
          <strong>[insert facebook/messenger]</strong>. Our team is available
          from 10:00 AM to 8:00 PM to assist you with all your pet supply needs.
        </p>
        {/* Add a contact form or additional contact information here */}
      </div>
    </div>
  );
}
