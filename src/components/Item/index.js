import './styles.css';
import { useNavigate } from 'react-router-dom';
import Routes from '../../constants/routes';

const Item = props => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`${Routes.ItemDetail}${props.product.id}`);
  };

  return (
    <div className="divItem" key={props.product.id}>
      <h3>{props.product.category + ' de ' + props.product.flavour}</h3>
      <img
        className="imgSize"
        src={props.product.image}
        alt={props.product.name}
      />
      <button className="showDetailButton" onClick={showDetail}>
        Mostrar Detalle
      </button>
    </div>
  );
};

export default Item;
