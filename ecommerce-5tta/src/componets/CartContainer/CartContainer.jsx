import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc,getFirestore, updateDoc} from 'firebase/firestore'
import { useState } from "react"
import { Link } from "react-router-dom"


function CartContainer() {
    const [orderId, setOrderId] = useState("")
    const {deleteCart, deleteProd, totalPrice,  cartList} = useCartContext()
    
    const addOrder = (name,email) =>{
    const order = {}
    order.buyer = {name: name, 
                    email: email
                }
    order.items = cartList.map(prod => {
        return {id: prod.id, name: prod.name , price: prod.price, quantity: prod.quantity}
        })
    order.total = totalPrice()


    const dataBase = getFirestore()
    const ordersCollection = collection(dataBase, "orders")
    addDoc(ordersCollection, order)
    .then(({id}) => setOrderId(id))
   
    .then(resp =>{
        console.log("order created", resp);
    })
    
    
    order.items.forEach(element => {
        
        const db = getFirestore()
        const queryDoc = doc(db, 'products', element.id) 
        getDoc(queryDoc)
        .then(
            resp => ( { id: resp.id, ...resp.data() } ) 
        )
        .then(resp => {
        
            const stockUpdate = parseInt(resp.stock) - element.quantity
                const updateProduct = doc(dataBase, "products", element.id)
                updateDoc( updateProduct , {stock: stockUpdate})
                deleteCart()

            } 
        )           
    })
}


  return (
    <>       
       {orderId != '' && <p>orden generada : {orderId}</p>}
        {cartList.length > 0 ?
        <div>
        {
            cartList.map(prod => 
                <div key={prod.id}>
                    <img src={prod.image} className="w-25"/>
                    {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
                    <button className="btn btn-danger" onClick={ () => deleteProd(prod.id) }> X </button>
                </div>
            )
        }
        <button onClick={ () => deleteCart() }>Vaciar Carrito</button>
        <h3>Precio total: {totalPrice()}</h3>

        <form onSubmit={ev => {
            ev.preventDefault()

            const name = ev.target.name.value
            const email = ev.target.email.value
            if(name === "" && email === ""){
              alert("debe completar el formulario")
              return
            }
            addOrder(name,email)
        }
        
        }>
                <input 
                id= "nombre"
                    type="text" 
                    name='name'
                    placeholder="ingrese el nombre" 

                />
                
                <input 
                id = "correo"
                    type="text" 
                    name='email'
                    placeholder="ingrese el email"
                />
                
                <button type ="submit" >Enviar</button>
            </form>
            </div>
    : <center>
    <h2>No hay productos en el carrito</h2>
    <Link to='/'>ir a compras</Link>
</center>
    }


    </>
  )
        


}

export default CartContainer