import './styles.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail'
import customFetch from '../../utils/customFetch'
import producto from '../../utils/producto.js'

const ItemDetailContainer = ({title}) => {

  const [item, setItem] = useState([])

    useEffect(() => {
        customFetch(2000, producto)
        .then(result => setItem(result))
    },[item])

  return (
    <div>
      <h1>{title}</h1>

      <div className='divItemDetailContainer'>
        <ItemDetail product={item}/>
      </div>

    </div>
  )
}

export default ItemDetailContainer