
import { useContext, useState } from 'react'

import Contador from '../Contador/Contador'



import "../ItemDetail/itemdetail.css"


const ItemDetail = ({ producto }) => {

  

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={producto.image} className="imagen" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{producto.detail}</p>
            <p>precio: {producto.price}</p>
            <p className="card-text"><small className="text-muted">stock: {producto.stock}</small></p>
            <Contador product={producto}/>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ItemDetail