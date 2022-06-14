import './styles.css'
import ItemCount from '../ItemCount'

const Item = ({id, name, image, stock}) => {
  return(
    <div className='divItem' key={id}>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <ItemCount stock={stock} initial={1} onAdd={()=>{}}/>
      <button> Mostrar Detalle </button>
    </div>
  )
}

export default Item