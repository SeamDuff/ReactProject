import { useState } from 'react';

import { CartContext } from '../../context/CartContext';

// const Provider = CartContext.Provider;

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = productID =>
    !!cart.find(product => product.id === productID);

  const addToCart = (selectedProduct, quantity) => {
    if (isInCart(selectedProduct.id)) {
      setCart(
        cart.map(product => {
          return product.id === selectedProduct.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...selectedProduct, quantity }]);
    }
  };

  const clearCart = () => setCart([]);

  const removeProductFromCart = productID =>
    setCart(cart.filter(product => product.id !== productID));

  const totalPrice = () =>
    cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

  const totalQuantity = () =>
    cart.reduce((acc, prod) => acc + prod.quantity, 0);

  const cartContextValue = {
    cart: cart,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
    addToCart: addToCart,
    clearCart: clearCart,
    removeProductFromCart: removeProductFromCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
