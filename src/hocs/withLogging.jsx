//1. CREAMOS LA FUNCION HOC

import { useEffect } from "react"

export const withLogging = (WrappedComponent)=> {

    //2. Definimos el componente que se crea en el HOC

    const ComponentWithLogging = (props) =>{

        //3. Funcionalidad
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó! 🍻`)
        },[])

        //4. Mostramos el componente original (eenvuelto)
        return <WrappedComponent {...props}/>
    }

    //5. retornar el nuevo componente

    return ComponentWithLogging

}