import React, { useState } from "react";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart({ closeCart }) {
  const [showNotif, setShowNotif] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Dog Food",
      price: 300,
      image: "/src/assets/toy.webp",
      quantity: 2,
    },
    {
      id: 2,
      name: "Dog Grooming Kit",
      price: 500,
      image: "/src/assets/toy.webp",
      quantity: 1,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle Checkout Click
  const handleCheckout = () => {
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 1000); // Hide after 1 sec
  };

  return (
    <>
      {/* Notification */}
      {showNotif && (
        <div className="fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg transition-opacity duration-500 animate-fade">
          ✅ Checkout successful!
        </div>
      )}

      {/* Cart Panel */}
      <aside
        className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={closeCart} className="text-2xl">
            <AiOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center text-gray-500">
              <FaShoppingCart size={64} className="text-gray-300" />
              <p className="mt-4 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                  <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="flex justify-between">
                      <span className="text-gray-600">&#x20B1; {item.price}</span>
                      <span className="font-semibold text-gray-900">
                        &#x20B1; {item.price * item.quantity}
                      </span>
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded border">
                        <button className="bg-gray-200 px-2 py-1 hover:bg-gray-300">
                          <FaMinus size={10} />
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button className="bg-gray-200 px-2 py-1 hover:bg-gray-300">
                          <FaPlus size={10} />
                        </button>
                      </div>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t bg-gray-100 p-4">
            <div className="flex justify-between text-gray-700">
              <span>Total:</span>
              <span className="font-bold">&#x20B1; {total}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-3 w-full rounded bg-gray-800 py-2 text-white hover:bg-gray-700"
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
