import { useContext } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/productsContext';

const ItemDetailContainer = ({ title }) => {
  const { id } = useParams();
  const products = useContext(ProductsContext);
  const selectedProduct = products.find(product => product.id === id);

  return (
    <div>
      <h1>{title}</h1>
      <div className="divItemDetailContainer">
        {selectedProduct ? (
          <ItemDetail product={selectedProduct} />
        ) : (
          <div> Loading.. </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
