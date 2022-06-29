import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="Cart">
      <span className="material-symbols-outlined">
        shopping_cart {cart.length}
      </span>
    </Link>
  );
};

export default CartWidget;
