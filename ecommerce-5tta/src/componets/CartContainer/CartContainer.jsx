import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { useState } from "react"
import { Link } from "react-router-dom"

import "../CartContainer/cartContainer.css"

function CartContainer() {
    const [orderId, setOrderId] = useState("")
    const { deleteCart, deleteProd, totalPrice, cartList } = useCartContext()
    const addOrder = (name, email) => {
        const order = {}
        order.buyer = {
            name: name,
            email: email
        }
        order.items = cartList.map(prod => {
            return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity }
        })
        order.total = totalPrice()

        const dataBase = getFirestore()
        const ordersCollection = collection(dataBase, "orders")
        addDoc(ordersCollection, order)
            .then(({ id }) => setOrderId(id))
        order.items.forEach(element => {
            const db = getFirestore()
            const queryDoc = doc(db, 'products', element.id)
            getDoc(queryDoc)
                .then(
                    resp => ({ id: resp.id, ...resp.data() })
                )
                .then(resp => {
                    const stockUpdate = parseInt(resp.stock) - element.quantity
                    const updateProduct = doc(dataBase, "products", element.id)
                    updateDoc(updateProduct, { stock: stockUpdate })
                    deleteCart()
                }
                )
        })
    }
    return (
        <>
            {orderId != '' && <h2 className="customh2">orden generada : {orderId}</h2>}
            {cartList.length > 0 ?
                <div>
                    <div class="d-grid gap-2 col-2 mx-auto">
                        <button className="btn btn-outline-danger" onClick={() => deleteCart()}>Vaciar Carrito</button></div>
                    {
                        cartList.map(prod =>
                            <div key={prod.id}>
                                <div className="contenedor">
                                    <img src={prod.image} className="image rounded" />
                                    <div>{prod.name}</div>
                                    <div>precio: ${prod.price}</div>
                                    <div className="columna">Cantidad: {prod.quantity}</div>
                                    <div ><button className="btn btn-danger " onClick={() => deleteProd(prod.id)}> X </button></div>
                                </div>
                            </div>
                        )
                    }
                    <div className="total"><h3 className="totall">Precio total: {totalPrice()}</h3></div>
                    <h3>debe completar el formulario para terminar la compra</h3>
                    <form className="form" onSubmit={ev => {
                        ev.preventDefault()
                        const name = ev.target.name.value
                        const email = ev.target.email.value
                        if (name === "" && email === "") {
                            alert("debe completar el formulario")
                            return
                        }
                        addOrder(name, email)
                    }
                    }>
                        <div>
                            <label htmlFor="nombre">nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                name='name'
                                placeholder="ingrese el nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="correo">Correo electronico</label>
                            <input
                                id="correo"
                                type="text"
                                name='email'
                                placeholder="correo@correo.com"
                            /></div>
                        <button className="btn btn-outline-success" type="submit" >Enviar</button>
                    </form>
                </div>
                : <center>
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/'><button className="btn btn-outline-dark btn-lg" >ir a compras</button></Link>
                </center>
            }
        </>
    )
}

export default CartContainer