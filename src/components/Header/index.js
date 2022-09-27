import React from 'react'
import * as S from './styles.js'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/index.js'
import Adopt from '../../pages/Adopt/index.js'
import Services from '../../pages/Services/index.js'
import PageNotFound from '../../pages/PageNotFound/index.js'
import Products from '../../pages/Products/index.js'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const handleClickColor = (selectedLink, e) => {
    e.target.classList.add('selected')

    if (selectedLink === 'home') {
      document.querySelector('#adopt').classList.remove('selected')
      document.querySelector('#products').classList.remove('selected')
      document.querySelector('#services').classList.remove('selected')
    } else if (selectedLink === 'adopt') {
      document.querySelector('#home').classList.remove('selected')
      document.querySelector('#products').classList.remove('selected')
      document.querySelector('#services').classList.remove('selected')
    } else if (selectedLink === 'products') {
      document.querySelector('#home').classList.remove('selected')
      document.querySelector('#adopt').classList.remove('selected')
      document.querySelector('#services').classList.remove('selected')
    } else if (selectedLink === 'services') {
      document.querySelector('#home').classList.remove('selected')
      document.querySelector('#adopt').classList.remove('selected')
      document.querySelector('#products').classList.remove('selected')
    }
  }

  return (
    <Router>
      <S.Header>
        <S.NavigationMenu>
        <S.Title>Pet Center</S.Title>
          <S.Ul>
            <li onClick={e => handleClickColor('home', e)}>
              <S.NavLink to='/home' id='home'>Home</S.NavLink>
            </li>
            <li onClick={e => handleClickColor('adopt', e)}>
              <S.NavLink to='/adote' id='adopt'>Adote</S.NavLink>
            </li>
            <li onClick={e => handleClickColor('products', e)}>
              <S.NavLink to='/produtos' id='products'>Produtos</S.NavLink>
            </li>
            <li onClick={e => handleClickColor('services', e)}>
              <S.NavLink to='/servicos' id='services'>Serviços</S.NavLink>
            </li>
          </S.Ul>
          <S.ContactLink href='https://api.whatsapp.com/send?phone=5531978649999' title='Entre em contato pelo whatsapp'>
            <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon>
            (31) 97864-9999
          </S.ContactLink>
        </S.NavigationMenu>

      </S.Header>

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/adote' element={<Adopt />} />
        <Route path='/servicos' element={<Services />} />
        <Route path='/produtos' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}