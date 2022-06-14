import Item from '../Item/'

const ItemList = ({products}) => {
  return(
    products.map(p =>
      <Item id={p.id} name={p.name} image={p.image} stock={p.stock} key={p.id}/>
      )
  )
}

export default ItemList