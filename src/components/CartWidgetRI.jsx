import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const CartWidgetRI = ()=> {
    const {cart, totalQty}= useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <BsCart4 fontSize={'1.4rem'} />
            {cart.length > 0 && <Badge pill bg="danger">
       {totalQty()}
      </Badge>}
        </div>
    )
}
export default CartWidgetRI