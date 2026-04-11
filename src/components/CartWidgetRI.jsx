import { Badge } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs"


const CartWidgetRI = ()=> {
    return(
        <div>
            <BsCart4 fontSize={'1.4rem'} />
            <Badge pill bg="danger">
       15
      </Badge>
        </div>
    )
}
export default CartWidgetRI