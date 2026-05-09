import "../css/Navbar.css"
import reactLogo from "../assets/react.svg"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
const Navbar = ({compras})=> {
    return(
        <nav className='nav-container'>
            <NavLink className="anchor-nav" to="/">
                {/* IMAGENES EN PUBLIC */}
                {/* <img style={{width:"10rem"}} alt='logo' src='../logo-shop.png'/> */}
                {/* IMAGENES EN SRC */}
                 <img style={{width:"10rem"}} alt='logo' src={reactLogo}/>
            </NavLink>
            <NavLink className="anchor-nav" to="/category/nuevos">Nuevos</NavLink>
            <NavLink className="anchor-nav" to="/category/ofertas">Ofertas</NavLink>
            <NavLink className="anchor-nav" to="/category/mas vendidos">Mas vendidos</NavLink>
            <CartWidget count={5} compras={compras}/>
        </nav>
    )
}



export default Navbar