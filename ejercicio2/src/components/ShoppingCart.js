// ShoppingCart.jsx
import React from 'react';

const ShoppingCart = ({ cartItems, onUpdateCart, onRemoveFromCart, isVisible, onCloseCart }) => {
  if (!isVisible) return null;

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="fixed right-0 top-0 w-full md:w-1/3 h-full bg-white p-4 overflow-auto">
      <button
        onClick={onCloseCart}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded absolute bottom-4 right-4"
      >
        Cerrar
      </button>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <img src={item.imageUrl} alt={item.description} className="w-20 h-20 object-cover mr-4" />
          <div className="flex-grow">
            <p className="font-bold">{item.description} (${item.price}) x {item.quantity}</p>
            <div className="flex space-x-2 mt-2">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateCart(item, e.target.value)}
                className="border rounded py-1 px-2 text-black w-16"
              />
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <strong>Total a pagar: ${getTotalPrice()}</strong>
      </div>
    </div>
  );
};

export default ShoppingCart;


