import './styles.css';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { dataBase } from '../../config/firebaseConfig';
import Routes from '../../constants/routes';
import { CartContext } from '../../context/CartContext';
import UserDataForm from '../UserDataForm';

const Cart = () => {
  const { cart, removeProductFromCart, clearCart, totalQuantity, totalPrice } =
    useContext(CartContext);

  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState();
  // const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const continueShopping = () => {
    navigate(`../${Routes.Home}`);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const validateFormData = () => {
    if (!userData.name) {
      setFormErrors('Nombre es requerido');
      return false;
    }
    if (!userData.email) {
      setFormErrors('Email es requerido');
      return false;
    }
    if (!userData.phone) {
      setFormErrors('Telefono es requerido');
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValid = validateFormData();
    const objOrder = {
      buyer: {
        name: userData.name,
        phone: userData.phone,
        email: userData.email
      },
      cart,
      total: totalPrice(),
      date: serverTimestamp()
    };
    if (isValid) {
      const ref = collection(dataBase, 'orders');
      addDoc(ref, objOrder).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Order ID ' + response.id,
          showConfirmButton: true
        });
        clearCart();
      });
      return;
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Campos sin completar',
        showConfirmButton: true
      });
    }
  };

  return cart.length === 0 ? (
    <div className="noProductsInCart">
      <h4>Todavia no hay ningun producto en tu carrito</h4>
      <button className="cardBtn" onClick={continueShopping}>
        Ver Productos
      </button>
    </div>
  ) : (
    <>
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
        <div className="cartFooter">
          <span>Precio total: {parseFloat(totalPrice())}</span>
          <span>Cantidad de productos: {totalQuantity()}</span>
        </div>
        <div className="cart__clear">
          <button className="cardBtn" onClick={clearCart}>
            Empty Cart
          </button>
          <button className="cardBtn" onClick={continueShopping}>
            Agregar mas productos
          </button>
        </div>
      </div>

      <UserDataForm
        handleChange={handleChange}
        data={userData}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
      />
    </>
  );
};

export default Cart;
