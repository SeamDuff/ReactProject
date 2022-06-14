import './styles.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import customFetch from '../../utils/customFetch'
import productos from '../../utils/productos'

const ItemListContainer = (props) => {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(2000, productos)
        .then(result => setItems(result))
    },[items])

    return(
        <div>
        <h1>{props.greeting}</h1>

        <div className='divItemListContainer'>
            <ItemList products={items}/>
        </div>

        </div>
    )
}

export default ItemListContainer