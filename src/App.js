import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NavigationRoutes from './constants/routes.js';
import { ProductsContext } from './context/productsContext.js';
import { getProducts } from './services/productsService.js';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(result => setProducts(result));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={NavigationRoutes.Home}
            element={
              <ItemListContainer greeting="Bienvenido a la pagina de Sevuchitas" />
            }
          />
          <Route
            path={`${NavigationRoutes.ItemDetail}:id`}
            element={<ItemDetailContainer title="Detalle del Producto" />}
          />
          <Route path={NavigationRoutes.Cart} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
