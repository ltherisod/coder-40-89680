import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncMock'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
// const params = useParams()
// console.log(params)
const {id} = useParams()

useEffect(()=>{
    getOneProduct(id)
    .then((res)=> setDetalle(res))
    .catch((error)=> console.log(error))
},[id])

  return (
    <div><ItemDetail detalle={detalle}/></div>
  )
}

export default ItemDetailContainer