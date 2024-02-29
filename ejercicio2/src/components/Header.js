import React from 'react';

const Header = ({ onToggleCart }) => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1>Almacenes Super Mario</h1>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        onClick={onToggleCart}
      >
        Carrito de Compras
      </button>
    </header>
  );
};

export default Header;
