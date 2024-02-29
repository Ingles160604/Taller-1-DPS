// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import ProductsGrid from './components/ProductsGrid';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === productToAdd.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const handleUpdateCart = (productToUpdate, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productToUpdate.id ? { ...item, quantity: parseInt(quantity, 10) } : item
      );
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="App">
      <Header onToggleCart={toggleCartVisibility} />
      <ProductsGrid onAddToCart={handleAddToCart} />
      <ShoppingCart
        cartItems={cartItems}
        onUpdateCart={handleUpdateCart}
        onRemoveFromCart={handleRemoveFromCart}
        isVisible={isCartVisible}
        onCloseCart={toggleCartVisibility}
      />
    </div>
  );
};

export default App;
