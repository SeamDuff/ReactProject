import './styles.css';
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, changeCount] = useState(initial);

  //suma hasta el maximo de stock
  const addCount = () => {
    if (count < stock) {
      changeCount(count + 1);
    }
  };

  //Se tiene en cuenta el initial = 1
  const disCount = () => {
    if (count > initial) {
      changeCount(count - 1);
    }
  };

  //se vuelve el contador a initial = 1
  const deleteCount = () => {
    changeCount(initial);
    alert('Pedido Confirmado');
  };

  return (
    <div className="divItemCountContainer">
      <div className="countContainer">
        <button onClick={disCount}>-</button>
        <p>{count}</p>
        <button onClick={addCount}>+</button>
      </div>

      <button onClick={deleteCount}>Confirmar</button>
    </div>
  );
};

export default ItemCount;
