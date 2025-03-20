import React from "react";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart({ closeCart }) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Use SweetAlert2 for Checkout
  const handleCheckout = () => {
    Swal.fire({
      title: "Checkout Successful!",
      text: "Your order has been placed.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <aside className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white shadow-xl">
      <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={closeCart} className="text-2xl">
          <AiOutlineClose />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center text-gray-500">
            <FaShoppingCart size={64} className="text-gray-300" />
            <p className="mt-4 text-lg">Your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 border-b pb-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-gray-600">&#x20B1; {item.price}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded border">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="bg-gray-200 px-2 py-1 hover:bg-gray-300"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="bg-gray-200 px-2 py-1 hover:bg-gray-300"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
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
  );
}
