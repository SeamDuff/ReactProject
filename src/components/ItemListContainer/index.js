import './styles.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import getProducts from '../../utils/customFetch'

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts()
        .then(result => setItems(result))
    },[])

    return(
        <div>
        <h1>{props.greeting}</h1>

        {
          items ? 
          <div className='divItemListContainer'>
          <ItemList products={items}/>
          </div> 
        :
          <div> Loading.. </div>
        }
        </div>
    )
}

export default ItemListContainer