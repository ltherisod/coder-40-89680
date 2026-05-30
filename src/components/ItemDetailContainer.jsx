import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/asyncMock'
import {useParams} from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
const [loading, setLoading]= useState(true)
const [invalid, setInvalid]= useState(null)
// const params = useParams()
// console.log(params)
const {id} = useParams()
useEffect(()=>{
  //1.CREAMOS LA REF
   const docRef = doc(db, "items", id)
   //2. traer el doc
   getDoc(docRef)
    .then((res)=> {
      if(res.data()){
        setDetalle({id:res.id, ...res.data()})
      }else{
    setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[id])

// useEffect(()=>{
//     getOneProduct(id)
//     .then((res)=> setDetalle(res))
//     .catch((error)=> console.log(error))
//     .finally(()=> setLoading(false))
// },[id])

  return (
    <div>
      {
        loading ? <LoaderComponent text='Cargando detalle...'/> : <ItemDetail detalle={detalle} invalid={invalid}/>
      }
    </div>
  )
}

export default ItemDetailContainer