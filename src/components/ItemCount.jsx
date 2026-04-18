import {useState, useEffect} from 'react'
const ItemCount = ({stock})=> {
// const [variableDeEstado, funcionModificadoraDelEstado] = useState(valorInicial)
const [count, setCount]= useState(1)
const [compra, setCompra]= useState(false)

    console.log('ItemCount')

    const sumar = ()=> {
        setCount(count + 1 )
    }

        const restar = ()=> {
            if(count > 0){

                setCount(count - 1 )
            }
    }

    const purchase = ()=> {
        setCompra(!compra)
    }

    // useEffect(()=>{
    //     //ejecutamos codigo
    //     //funciones
    //     //peticiones
    //     //logica
    // },[array de dependencias])

    //1. SIN ARRAY DE DEPENDENCIAS
    //SE EJECUTA SIEMPRE
    //USO: CASI NUNCA (TIMER, UN CRONOMETRO)
    useEffect(()=>{
        console.log('ME EJECUTO SIEMPRE')
    })

     //2. CON ARRAY DE DEPENDENCIAS VACIO
    //SE EJECUTAUNA SOLA VEZ. CUANDO EL COMPONENTE SE MONTA
    //USO: CASI SIEMPRE/ SIEMPRE (APIS)
    useEffect(()=>{
        console.log('ME EJECUTO UNA SOLA VEZ')
    },[])

     //. CON ARRAY DE DEPENDENCIAS CON DATO
    //SE EJECUTAUNA SOLA VEZ. CUANDO EL COMPONENTE SE MONTA Y SIEMPRE QUE EL DATO QUE ESCUCHA CAMBIE
    //USO: CASI SIEMPRE/ SIEMPRE (APIS, PAGINADOS, VALIDACIONES)
    useEffect(()=>{
        console.log('ME EJECUTO CUANDO MONTA EL COMPONENTE Y SIEMPRE QUE CAMBIE COMPRA ', compra)
    },[compra])

    return(
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn ">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button  className="btn btn-primary" onClick={purchase}>Comprar</button>
        </div>
    )
}
export default ItemCount