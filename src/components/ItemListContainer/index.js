import ItemCount from '../ItemCount'
import styles from './styles.css'

const ItemListContainer = (props) => {
    return(
        <>
        <h1>{props.greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={()=>{}}/>
        </>
    )
}

export default ItemListContainer