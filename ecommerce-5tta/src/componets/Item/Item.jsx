import { Link } from "react-router-dom"


const Item = ({ producto }) => {
  return (
    <div className="card1 bg-primary">
      <div className="">
        <img className="imagenes" src={producto.image} />
        <h2 className="prod">{producto.name}</h2>
        <p className="precios">${producto.price}</p>
        <div className="card-footer">
          <Link to={`/detalle/${producto.id}`}>
            <button className="btn btn-outline-dark">detalle</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item