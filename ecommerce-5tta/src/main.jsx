import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { inifirebase } from './firebase/config.js'
//import './index.css'

inifirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
