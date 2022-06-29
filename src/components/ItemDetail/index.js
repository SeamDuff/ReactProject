import './styles.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Routes from '../../constants/routes';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [cartCount, changeCartCount] = useState(0);

  const showCart = () => {
    navigate(`../${Routes.Cart}`);
  };

  const onAdd = cartQuantity => {
    addToCart(product, cartQuantity);
    changeCartCount(cartQuantity);
  };

  return (
    <div className="itemDetailContainer">
      <img src={product.image} alt={product.name} width="400px" />

      <div className="itemDetail">
        <h3>{product.description}</h3>
        <h4>Precio: ${product.price}</h4>
        <h4>Stock: {product.stock}</h4>
        {cartCount ? null : (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        )}
        <div className="confirmContainer">
          <p>Cantidad en carrito: {cartCount}</p>
          <div className="confirmButton">
            <button onClick={showCart}>Terminar mi compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
