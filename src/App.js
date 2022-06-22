import NavBar from './components/NavBar/index.js';
import ItemListContainer from './components/ItemListContainer/index.js';
import ItemDetailContainer from './components/ItemDetailContainer/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from './services/productsService.js';
import { ProductsContext } from './context/productsContext.js';
import NavigationRoutes from './constants/routes.js';

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
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
