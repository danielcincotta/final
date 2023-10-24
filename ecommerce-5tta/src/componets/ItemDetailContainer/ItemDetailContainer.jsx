import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState([true])
  const { pid } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'products', pid) // id useParams
    getDoc(queryDoc)
      .then(resp => ({ id: resp.id, ...resp.data() }))
      .then(resp => {
        setLoading(false)
        setProduct(resp)
      }
      )
  }, [])
  return (
    <div>
      {loading ? <h2>cargando...</h2> : <ItemDetail producto={product} />}
    </div>
  )
}
export default ItemDetailContainer