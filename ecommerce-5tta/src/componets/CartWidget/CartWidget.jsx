import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "../CartWidget/cartwidget.css"


function CartWidget() {
  const {totalProducts} = useCartContext()
  return (
    <div>
    <span>{totalProducts()}</span>
    <Link to="./carrito">
    <button className="btn btn-outline carrito"></button>
    </Link>
    </div>
  )
}

export default CartWidget