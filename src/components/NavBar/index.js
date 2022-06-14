import CartWidget from "../CartWidget"
import './styles.css'

const NavBar = () => {
    return(
    <header>
        <div className="navBar">
            <h1>Sevuchitas</h1>
            <nav className="nav">
                    <a href="#">Inicio</a>
                    <a href="#">Productos</a>
                    <a href="#">About</a> 
                    <a href="#">Contacto</a>
                    <CartWidget/>
            </nav>
        </div>
    </header>
    )
}

export default NavBar