import './styles.css';

import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <header>
      <div className="navBar">
        <Link to="/">
          <img src="/logo-sevuchitas.png" alt="logo-sevuchitas" width={100} />
        </Link>
        <nav className="nav">
          <Link to="/"> Inicio </Link>
          <Link to="/section/Nosotros"> Nosotros </Link>
          <Link to="/section/Contacto"> Contacto </Link>
          <Link to="Cart">
            <CartWidget />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
