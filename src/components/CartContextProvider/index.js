import { useState } from 'react';

import { CartContext } from '../../context/CartContext';

// const Provider = CartContext.Provider;

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
      setTotalQuantity(totalQuantity + quantity);
      setTotalPrice(totalPrice + selectedProduct.price * quantity);
    } else {
      setCart([...cart, { ...selectedProduct, quantity }]);
      setTotalQuantity(totalQuantity + quantity);
      setTotalPrice(totalPrice + selectedProduct.price * quantity);
    }
  };

  const clearCart = () => setCart([]);

  const removeProductFromCart = productID =>
    setCart(cart.filter(product => product.id !== productID));

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
