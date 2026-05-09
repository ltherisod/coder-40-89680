import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  const onAdd = (cantidad)=> {
    alert(`Agregaste al carrito ${cantidad} de unidades de ${detalle.name}`)
  }
  return (
    <div>
        <h2>Bienvenidos al detalle de {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <p>unidades disponibles: {detalle.stock}</p>
        <ItemCount stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail