import './styles.css'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
  return(

    <div className='divItemDetail'>
      
      <img src={product.image} alt={product.name} width="400px" />
      
      <div>
        <h2>Nombre: {product.name}</h2>
        <h3>Descripcion: {product.description}</h3>
        <h4>Precio: ${product.price}</h4>
        <h4>Stock: {product.stock}</h4>
        <ItemCount stock={product.stock} initial={1} onAdd={()=>{}}/>
      
      </div>
    </div>
  )
}

export default ItemDetail