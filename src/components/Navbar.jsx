import "../css/Navbar.css"
import reactLogo from "../assets/react.svg"
import CartWidget from "./CartWidget"
const Navbar = ({compras})=> {
    return(
        <nav className='nav-container'>
            <a className="anchor-nav" href="">
                {/* IMAGENES EN PUBLIC */}
                {/* <img style={{width:"10rem"}} alt='logo' src='../logo-shop.png'/> */}
                {/* IMAGENES EN SRC */}
                 <img style={{width:"10rem"}} alt='logo' src={reactLogo}/>
            </a>
            <a className="anchor-nav" href="">Nuevos</a>
            <a className="anchor-nav" href="">Ofertas</a>
            <a className="anchor-nav" href="">Mas vendidos</a>
            <CartWidget count={5} compras={compras}/>
        </nav>
    )
}



export default Navbar