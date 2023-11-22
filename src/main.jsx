import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InicioContainer from './components/Inicio/InicioContainer.jsx'
import PostContainer from './components/PostContainer/PostContainer.jsx'
import Footer from '../src/components/Footer.jsx'
import SetLenguage from './components/SetLenguage.jsx'
import './index.scss'
import './lenguage/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SetLenguage/>}/>
      <Route path='/inicio' element={<InicioContainer/>}/>
      <Route path='/:categoryId' element={<PostContainer/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
