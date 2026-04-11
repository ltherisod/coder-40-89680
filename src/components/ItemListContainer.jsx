const ItemListContainer = ({saludo, alumno , students})=> {

    // const {saludo, alumno} =props

     console.log(students)
    return(
        <div>
           <h1>{saludo}</h1> 
           <p>{alumno}</p>
          

        </div>
    )
}

export default ItemListContainer