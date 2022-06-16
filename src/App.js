import NavBar from './components/NavBar/index.js'
import ItemListContainer from './components/ItemListContainer/index.js'
import ItemDetailContainer from './components/ItemDetailContainer/index.js';

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenido a la pagina de Sevuchitas" />
    <ItemDetailContainer title="Detalle del Producto"/>
    </>
    )
}

export default App;
