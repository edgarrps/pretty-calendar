import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
  </React.StrictMode>
)