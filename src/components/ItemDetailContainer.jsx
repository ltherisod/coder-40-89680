import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncMock'
import {useParams} from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
const [loading, setLoading]= useState(true)
// const params = useParams()
// console.log(params)
const {id} = useParams()

useEffect(()=>{
    getOneProduct(id)
    .then((res)=> setDetalle(res))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[id])

  return (
    <div>
      {
        loading ? <LoaderComponent text='Cargando detalle...'/> : <ItemDetail detalle={detalle}/>
      }
    </div>
  )
}

export default ItemDetailContainer