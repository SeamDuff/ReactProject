import './styles.css';

import React, { useContext, useState } from 'react';

import { PRODUCTS_CATEGORY_LIST } from '../../constants/products';
import { ProductsContext } from '../../context/productsContext';
import ItemList from '../ItemList';

const ItemListContainer = props => {
  const products = useContext(ProductsContext);

  const [checkedCategories, setCheckedCategories] = useState([]);

  const selectedProducts = checkedCategories.length
    ? products.filter(product => checkedCategories.includes(product.category))
    : products;

  // Add/Remove checked item from list
  const handleCheck = event => {
    var updatedList = [...checkedCategories];
    if (event.target.checked) {
      updatedList = [...checkedCategories, event.target.value];
    } else {
      updatedList.splice(checkedCategories.indexOf(event.target.value), 1);
    }
    setCheckedCategories(updatedList);
  };

  // Return classes based on whether item is checked
  const isChecked = item =>
    checkedCategories.includes(item)
      ? 'selectedCheckListItem'
      : 'checkListItem';

  return (
    <div>
      <h1>{props.greeting}</h1>

      <div className="checkListContainer">
        {PRODUCTS_CATEGORY_LIST.map((item, index) => (
          <label className={isChecked(item)} key={index}>
            <input
              readOnly
              value={item}
              type="checkbox"
              onChange={handleCheck}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      {products ? (
        <div className="divItemListContainer">
          <ItemList products={selectedProducts} />
        </div>
      ) : (
        <div> Loading.. </div>
      )}
    </div>
  );
};

export default ItemListContainer;
