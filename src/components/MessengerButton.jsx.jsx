import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const MessengerButton = () => {
  return (
    <a
      href="https://www.messenger.com/t/2097525790540409" // Replace with your Messenger link
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        backgroundColor: "#0078FF", // Messenger blue color
        padding: "12px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        color: "white",
      }}
    >
      <FaFacebookMessenger size={40} />
    </a>
  );
};

export default MessengerButton;
