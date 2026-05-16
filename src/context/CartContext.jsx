import { createContext, useState } from "react";

//1. CREAMOS EL CONTEXTO
export const CartContext = createContext()


//2. CREAMOS AL PROVEEDOR
export const CartProvider = ({children})=> {
const [cart, setCart]= useState([])

//funciones (HERRAMIENTAS)
//agregar un prod al carrito, no repetir
const addItem = (item, qty)=>{
    // console.log(item, qty)
    // console.log({...item, quantity:qty})
    if(isInCart(item.id)){
        //ya existe
        setCart(
            cart.map((prod)=> {
                if(prod.id === item.id){
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    //lo dejo tal como esta
                    return prod
                }
            })
        )
    }else{
        //no existe, lo agrego nuevo
        setCart([...cart, {...item, quantity:qty}])
    }
}



//borrar todo el carrito

const clear = ()=>{
    setCart([])
}

//borre un item carrito
 const deleteItem = (id)=> {
    setCart(cart.filter((prod)=> prod.id !== id))
 }

//si esa el prod en el carrito o no
 const isInCart = (id)=> {
    return cart.some((prod)=> prod.id === id)
 }

//total a pagar

const total = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity * prod.price,0)
}
//OPCIONAL
const totalConImp = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity * prod.price,0.15)
}
//total de items (cantidad)
 const totalQty = ()=>{
    return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
 }


    return(
        <CartContext.Provider value={{cart, clear, addItem, deleteItem, total, totalQty}}>
                {children}
        </CartContext.Provider>
    )
}