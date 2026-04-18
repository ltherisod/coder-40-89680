import React from 'react'

const ComponentChildren = (props) => {
  return (
    <div
    style={{
        backgroundColor:'#56e9e4',
        width:'90%',
        height:'30rem',
        borderRadius:'5%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:15
    }}
    >
        <h1>Componente con Children</h1>
        {props.children}
    </div>
  )
}

export default ComponentChildren