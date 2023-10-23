import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

export const useContador = ({product}) => {
    const [count, setCount] = useState(0)
    const {addProduct , cartList} = useCartContext()
    const agregar = () => {
        setCount(count + 1)
    }
    const eliminar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const carrito = () => {
        if (count > 0) 
        {  
            addProduct({...product, quantity: count})         
        }
    }
    return { count, agregar, eliminar, carrito }
}