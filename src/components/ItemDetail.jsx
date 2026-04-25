import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h2>Bienvenidos al detalle de {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <p>unidades disponibles: {detalle.stock}</p>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail