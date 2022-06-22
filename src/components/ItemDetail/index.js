import './styles.css';
import ItemCount from '../ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div className="divItemDetailContainer">
      <img src={product.image} alt={product.name} width="400px" />

      <div className="divItemDetail">
        <h3>{product.description}</h3>
        <h4>Precio: ${product.price}</h4>
        <h4>Stock: {product.stock}</h4>
        <ItemCount stock={product.stock} initial={1} onAdd={() => {}} />
      </div>
    </div>
  );
};

export default ItemDetail;
