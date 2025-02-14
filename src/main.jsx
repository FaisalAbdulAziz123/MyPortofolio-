import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'  // Tambahkan impor HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* Gunakan HashRouter untuk routing */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
