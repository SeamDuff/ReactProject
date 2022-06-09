import styles from './styles.css'
import { useState } from 'react'


const ItemCount = ({stock,initial, onAdd}) => {

  const [count,changeCount] = useState(initial)

  //suma hasta el maximo de stock
  const addCount = () => {
    if(count < stock){
      changeCount(count + 1)
    }
  }

    //Se tiene en cuenta el initial = 1
  const disCount = () => {
    if(count > initial){
      changeCount(count - 1)
    }
  }

  //se vuelve el contador a initial = 1
  const deleteCount = () => {
      changeCount(initial)
      alert('Pedido Confirmado')
  }

  return(
    <>
    <button onClick={disCount}>-</button>
    <button onClick={addCount}>+</button> 
      <p>El contador es: {count}</p>
    <button onClick={deleteCount}>Confirmar</button>
    </>
  )
}

export default ItemCount