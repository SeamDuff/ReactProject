import './styles.css';

import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget';

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
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
