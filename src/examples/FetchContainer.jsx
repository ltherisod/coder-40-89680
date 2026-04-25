import React, {useEffect, useState} from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const FetchContainer = () => {
const {data, error, loading}= useFetch('https://rickandmortyapi.com/api/character')
const {data:dataDB, error:errorDB, loading:loadingDB}= useFetch('https://dragonball-api.com/api/characters')
// const [data, setData]= useState([])

//THEN/CATCH
    // useEffect(()=>{
    //     fetch('https://rickandmortyapi.com/api/character')//1. PIDO DATOS
    //     .then((response)=> response.json()) //2.TRADUZCO
    //     .then((data)=> setData(data.results))//3. GUARDAR DATA
    //     .catch((error)=> console.log((error)))//4. ATRAPAMOS EL ERROR
    // },[])

    //TRY/CATCH
    //    useEffect(()=>{
    //         const getPersonajes = async ()=> {
    //             try{
    //                 //1.PIDO DATOS
    //                 const response = await fetch('https://rickandmortyapi.com/api/character')
    //                 //2. TRADUCIR
    //                 const data =  await response.json()
    //                 //3. guardo data
    //                 setData(data.results)
    //             }catch(error){
    //                 //4. atrapamos el error
    //                 console.log(error)
    //             }
    //         }

    //         getPersonajes()
    // },[])


    console.log({dataDB, errorDB, loadingDB})
  return (
    <div>
       <h1>FetchContainer</h1> 
       <FetchList data={dataDB?.items}/>
       <FetchList data={data?.results}/>
        </div>
  )
}

export default FetchContainer