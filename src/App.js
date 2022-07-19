import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart';
import { CartContextProvider } from './components/CartContextProvider';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { dataBase } from './config/firebaseConfig';
import NavigationRoutes from './constants/routes.js';
import { ProductsContext } from './context/ProductsContext.js';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(dataBase, 'productos');

    getDocs(productsCollection).then(result => {
      const products = result.docs.map(res => {
        return {
          id: res.id,
          ...res.data()
        };
      });
      setProducts(products);
    });
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <CartContextProvider>
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
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContext.Provider>
  );
}

export default App;
