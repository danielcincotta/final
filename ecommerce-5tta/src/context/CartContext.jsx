import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const addProduct = (newProduct) => {
        const indx = cartList.findIndex(product => product.id === newProduct.id)
        if (indx !== -1) {
            cartList[indx].quantity = cartList[indx].quantity + newProduct.quantity;
            setCartList([...cartList])
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])
        }
    }
    const deleteProd = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))
    const totalProducts = () => cartList.reduce((cantidadTotal, product) => cantidadTotal += product.quantity, 0)
    const totalPrice = () => cartList.reduce((precioTotal, product) => precioTotal += (product.price * product.quantity), 0)
    const deleteCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteProd,
            deleteCart,
            totalProducts,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )

}
