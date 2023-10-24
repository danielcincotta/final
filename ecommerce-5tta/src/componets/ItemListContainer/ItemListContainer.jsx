import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList"
import { collection,getDocs, getFirestore,query, where } from 'firebase/firestore'
import "../ItemListContainer/itemlistcontainer.css"


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState([true])
  const { cid } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    if (cid) {
      const queryFilter = query(queryCollection, where('category', '==', cid))
      getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [cid])

  return (
    <> <h1>Bienvenidos a CompuNet</h1>
      <div className="container">
        {loading ? <h2>cargando...</h2> : <ItemList productos={products} />}
      </div>
    </>
  )
}

export default ItemListContainer



