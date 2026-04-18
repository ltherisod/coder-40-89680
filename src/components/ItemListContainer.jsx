import { useEffect, useState } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
const ItemListContainer = ({saludo})=> {
const [data, setData]=useState([])


    useEffect(()=>{
        getProducts()//pide data
        .then((res)=> setData(res))//guarda la data
        .catch((error)=> console.log(error))//atrapa el error
        //se ejeuta una sola vez
    },[])
     console.log('ItemListContainer', data)

    return(
        <div>
           <h1>{saludo}</h1> 
           <ItemList data={data}/>
            {/* {data.map((prod)=> <p key={prod.id}>{prod.name}</p>)} */}
        </div>
    )
}

export default ItemListContainer