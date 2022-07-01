import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart, totalQuantity } = useContext(CartContext);

  return cart.length === 0 ? (
    <div></div>
  ) : (
    <Link to="Cart">
      <span className="material-symbols-outlined">
        shopping_cart {totalQuantity()}
      </span>
    </Link>
  );
};

export default CartWidget;
