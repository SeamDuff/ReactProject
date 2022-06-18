import './styles.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail'
import getProducts from '../../utils/customFetch.js'

const ItemDetailContainer = ({title}) => {

  const [item, setItem] = useState({})

    useEffect(() =>{
      getProducts()
      .then(result => setItem(result.find(result => result.id === '1')))
    },[])

  return (
    <div>
      <h1>{title}</h1>
      <div className='divItemDetailContainer'>
        
        {
          item ? <ItemDetail product={item}/> :
          <div> Loading.. </div>
        }
      </div>
    </div>
  )
}

export default ItemDetailContainer