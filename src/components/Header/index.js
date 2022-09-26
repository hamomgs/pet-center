import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Adopt from '../../pages/Adopt'
import Services from '../../pages/Services'
import PageNotFound from '../../pages/PageNotFound'
import Products from '../../pages/Products'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/adocao'>Adoção</Link>
          </li>
          <li>
            <Link to='/produtos'>Produtos</Link>
          </li>
          <li>
            <Link to='/servicos'>Serviços</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/adocao' element={<Adopt />} />
        <Route path='/servicos' element={<Services />} />
        <Route path='/produtos' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </header>
  )
}