import { Link } from "react-router-dom"
import { useCount } from '../hooks/useContador'

function Contador(product) {
    const { count, agregar, eliminar, carrito } = useCount(product)
    return (
        <>
            <Link to="/">
                <button className="btn btn-outline-dark btn-lg">Seguir comprando</button>
            </Link>
            <div className='text-center'>
                <div> <span className='fs-2 fw-bold'>{count}</span></div>
                <button className="btn btn-outline-danger" onClick={eliminar}>-</button>
                <button className="btn btn-secondary" onClick={carrito}>agregar a carrito</button>
                <button className="btn btn-outline-success" onClick={agregar}>+</button>
            </div>
        </>
    )
}


export default Contador