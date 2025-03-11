import React from "react";

export default function Contact() {
  return (
    <div className="mt-20 border border-red-300">
      <div className="wrapper mx-auto space-y-10 py-8 text-center lg:max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
        <p className="text-lg">
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
