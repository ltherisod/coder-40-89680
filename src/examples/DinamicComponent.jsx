import React from 'react'

const DinamicComponent = (props) => {
    const{image, title, description, btnText, color, colorCss}= props
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt={title}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className={`btn btn-${color}`}>{btnText}</button>
            {/* <button style={{backgroundColor:colorCss}}>{btnText}</button> */}
        </div>      
    </div>
  )
}

export default DinamicComponent