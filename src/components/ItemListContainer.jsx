import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({saludo})=> {
const [data, setData]=useState([])
const [loading, setLoading]= useState(false)
const {type}= useParams()
console.log(type)

        useEffect(()=> {
             setLoading(true)//prendo el loader
             //1. CONECTO CON NUESTRA COLL
             const prodColl= type ? query(collection(db, "items"), where("category", "==", type)):collection(db, "items")
             //2. PEDIR LOS DATOS (DOCUMENTOS)
             getDocs(prodColl)
             .then((res)=> {
                const list = res.docs.map((doc)=> {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(list)
             })
             .catch((error)=> console.log(error))
             .finally(()=> setLoading(false))
        },[type])


    // useEffect(()=>{
    //     setLoading(true)//prendo el loader
    //     getProducts()//pide data
    //     .then((res)=> {
    //         if(type){
    //             //filtro
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     })//guarda la data
    //     .catch((error)=> console.log(error))//atrapa el error
    //     .finally(()=> setLoading(false))
    //     //tiene que estar a la escucha del cambio de categoria
    // },[type])
    //  console.log('ItemListContainer', data)

    return(
       <>
       {
        loading 
        ? <LoaderComponent text={type ? 'Cargando categoria...' : 'Cargando productos'}/>
        :  <div>
           
           <h1>{saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1> 
           <ItemList data={data}/>
           
        </div>
       }
       </>
    )
}

export default ItemListContainer