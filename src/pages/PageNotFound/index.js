import React from 'react'
import Image404 from '../../assets/404-image.png'
import * as S from './styles.js'

export default function PageNotFound() {
  return (
    <S.PageNotFoundSection>
      <figure>
        <S.Image src={Image404} alt="Número 404 com fundo de cachorro" />
      </figure>
      <S.Title>Página Não Encontrada</S.Title>
      <S.P>A página que você procura parece não existir</S.P>
      <S.GoToHomeLink to='/home' title='Ir para página Home'>Ir para Home</S.GoToHomeLink>
    </S.PageNotFoundSection>
  )
}