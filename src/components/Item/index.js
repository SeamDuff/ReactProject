import './styles.css'

const Item = ({id, name, image}) => {
  return(
    <div className='divItem' key={id}>
      <h1>{name}</h1>
      <img className='imgSize' src={image} alt={name} />
      <button> Mostrar Detalle </button>
    </div>
  )
}

export default Item