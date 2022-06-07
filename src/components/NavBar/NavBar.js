import CartWidget from "../CartWidget/CartWidget"
import styles from "./styles.css"

const NavBar = () => {
    return(
    <header>
        <h1 className="logo">Sevuchitas</h1>
        <nav className="navBar">
            <a href="#">Inicio</a>
            <a href="#">Productos</a>
            <a href="#">About</a> 
            <a href="#">Contacto</a>
            <CartWidget/>
        </nav>
    </header>
    )
}

export default NavBar