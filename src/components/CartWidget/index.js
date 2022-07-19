import './styles.css';

import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart, totalQuantity } = useContext(CartContext);

  return cart.length === 0 ? (
    <div></div>
  ) : (
    <button className="cartButtonContainer">
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className="icon-button__badge"> {totalQuantity()}</span>
    </button>
    // <div className="material-symbols-outlined">
    //   shopping_cart
    //   <span> {totalQuantity()}</span>
    // </div>
  );
};

export default CartWidget;
