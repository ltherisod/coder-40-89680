import React from 'react'

const FetchCard = ({pj}) => {
  return (
    <div className="card" style={{width:'18rem'}}>
  <img src={pj.image} className="card-img-top" alt={pj.name}/>
  <div className="card-body">
    <p className="card-text">{pj.name}</p>
  </div>
</div>
  )
}

export default FetchCard