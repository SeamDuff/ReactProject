import './styles.css';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Routes from '../../constants/routes';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, removeProductFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const continueShopping = () => {
    navigate(`../${Routes.Home}`);
  };

  return (
    <div className="page">
      <div className="page__in"></div>

      <div className="cart">
        <h2 className="titulo32">Mi Carrito</h2>
      </div>

      <div className="cart__table">
        <div className="cart__table__row">
          <div className="cart__table__row__col">
            <p className="txt16d">Imagen</p>
          </div>
          <div className="cart__table__row__col">
            <p className="txt16d">Descripcion</p>
          </div>
          <div className="cart__table__row__col">
            <p className="txt16d">Precio</p>
          </div>
          <div className="cart__table__row__col">
            <p className="txt16d">Cantidad</p>
          </div>
          <div className="cart__table__row__col">
            <p className="txt16d">Eliminar</p>
          </div>
        </div>
      </div>

      <div>
        {cart.map(product => (
          <div key={product.id} className="cart__table__row">
            <div className="cart__table__row__col">
              <img className="cart__img" src={product.image} alt="" />
            </div>
            <div className="cart__table__row__col">
              <p className="txt16d">{product.description}</p>
            </div>
            <div className="cart__table__row__col">
              <p className="txt16d">${product.price}</p>
            </div>
            <div className="cart__table__row__col">
              <p className="txt16d">{product.quantity}</p>
            </div>
            <div className="cart__table__row__col">
              <button
                className="cart__btn"
                onClick={() => removeProductFromCart(product.id)}>
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__clear">
        <button className="cardBtn" onClick={clearCart}>
          Empty Cart
        </button>
        <button className="cardBtn" onClick={continueShopping}>
          Add more products
        </button>
      </div>

      {/* <div className="cartButtonContainer">
        <button className="removeBtn" onClick={removeProductFromCart}>
          Remove Product
        </button>
        <button className="cleanCart" onClick={clearCart}>
          Clean Cart
        </button>
      </div> */}
    </div>
  );
};

export default Cart;
