import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './componets/Navbar/Navbar'
import CartContainer from "./componets/CartContainer/CartContainer"
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'





import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:cid' element={<ItemListContainer/>} />
          <Route path="/carrito" element={<CartContainer/>}/>
          <Route path='/descripcion/:pid' element={<ItemDetailContainer/>} />
        </Routes>
        </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
