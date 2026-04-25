import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncMock'

const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})

useEffect(()=>{
    getOneProduct('02')
    .then((res)=> setDetalle(res))
    .catch((error)=> console.log(error))
},[])
  return (
    <div><ItemDetail detalle={detalle}/></div>
  )
}

export default ItemDetailContainer