import React, { useEffect } from 'react'
import * as S from './styles.js'

export default function Home() {
  useEffect(() => {
    document.querySelector('#home').classList.add('selected')
  }, [])

  return (
    <S.HomeSection>
      <S.Container>
        <S.Title>Tosa e cuidados com pets</S.Title>
        <S.P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magma aliqua.
        </S.P>
        <S.SeeMore to='/servicos'>Ver Serviços</S.SeeMore>
        <S.P>Nossa Localização: Av. Cristiano, 999 - MG</S.P>
      </S.Container>
    </S.HomeSection>
  )
}