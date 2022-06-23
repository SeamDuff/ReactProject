import './styles.css';

import { useState } from 'react';

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

  const sendCountToOnAdd = () => {
    onAdd(count);
    changeCount(0);
  };

  return (
    <>
      <div className="itemCountContainer">
        <div className="countContainer">
          <button onClick={disCount}>-</button>
          <p>{count}</p>
          <button onClick={addCount}>+</button>
        </div>
        <div className="itemCountConfirmButton">
          <button onClick={sendCountToOnAdd}>Confirmar</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
