import React from 'react'
import * as S from './styles.js'
import { MagnifyingGlass } from  'react-loader-spinner'

export default function SearchLoader() {

  return (
    <S.SearchLoaderContainer>
        <MagnifyingGlass
          visible={true}
          width="80"
          glassColor='#DCE9E2'
          color='var(--tertiary-color)'
        />
      <p>Buscando...</p>
    </S.SearchLoaderContainer>
  )
}