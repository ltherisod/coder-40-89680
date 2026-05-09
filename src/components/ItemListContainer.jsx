import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"

const ItemListContainer = ({saludo})=> {
const [data, setData]=useState([])
const {type}= useParams()
console.log(type)
    useEffect(()=>{
        getProducts()//pide data
        .then((res)=> {
            if(type){
                //filtro
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })//guarda la data
        .catch((error)=> console.log(error))//atrapa el error
        //tiene que estar a la escucha del cambio de categoria
    },[type])
     console.log('ItemListContainer', data)

    return(
        <div>
            {/* <Input/> */}
           <h1>{saludo}</h1> 
           <ItemList data={data}/>
           
        </div>
    )
}

export default ItemListContainer