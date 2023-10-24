import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

export const useCount = ({product}) => {
    const [count, setCount] = useState(0)
    const {addProduct} = useCartContext()
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
            setCount(0)   
        }
    }
    return { count, agregar, eliminar, carrito }
}