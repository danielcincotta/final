import { Link } from "react-router-dom"
import { useContador } from '../hooks/useContador'

function Contador(product) {
    const { count, agregar, eliminar, carrito } = useContador(product)
     
    return <div className='text-center'>
        <span className='fs-2 fw-bold'>{count}</span>
        <button onClick={agregar}>+</button>
        <button onClick={carrito}>agregar a carrito</button>
        <button onClick={eliminar}>-</button>

        <Link to="/">Seguí comprando</Link>
    </div>
}


export default Contador