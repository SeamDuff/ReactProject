import './styles.css'

const Item = (props) => {
  return(
    <div className='divItem' key={props.product.id}>
      <h1>{props.product.name}</h1>
      <img className='imgSize' src={props.product.image} alt={props.product.name} />
      <button> Mostrar Detalle </button>
    </div>
  )
}

export default Item