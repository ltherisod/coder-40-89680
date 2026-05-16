import React, { useState } from 'react'
import ItemCount from './ItemCount'
//4. PARA USAR UN CONTEXTO DEBO IMPORTAR 2 COSAS : 1 EL HOOK PARA USAR CONTEXTO (USECONTEXT), 2. QUE CONTEXTO QUIERO USAR (CARTCONTEXT)
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  const [purchase, setPurchase]= useState(false)
// const contexto = useContext(CartContext)
// console.log(contexto, 'contexto')
const {cart, addItem} = useContext(CartContext)
console.log(cart, 'contexto')
  const onAdd = (cantidad)=> {
   addItem(detalle,cantidad)
   setPurchase(true)
  }
  return (
     <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <h2>Bienvenidos al detalle de {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <p>unidades disponibles: {detalle.stock}</p>
        {purchase ? <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail