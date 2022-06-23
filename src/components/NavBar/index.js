import './styles.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className="navBar">
        <Link to="/">
          <h1>Sevuchitas</h1>
        </Link>
        <nav className="nav">
          <Link to="/"> Inicio </Link>
          <Link to="/section/Nosotros"> Nosotros </Link>
          <Link to="/section/Contacto"> Contacto </Link>
          <Link to="Cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
