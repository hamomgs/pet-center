import React from 'react'
import image from '../../assets/vet-pic.jpg'
import * as S from './styles.js'

export default function AboutUs() {
  return(
    <S.AboutUsSection>
      <figure>
        <S.Image src={image} alt="Veterinária segurando cachorro." />
      </figure>
      <S.AboutContainer>
        <S.LittleTitle>SOBRE NÓS</S.LittleTitle>
        <S.Title>Entenda quem somos e por que existimos</S.Title>
        <S.P>
          A Pet Center é um espaço dedicado aos cães e gatos. Quem chega aqui
          encontra uma loja pet shop com opções de produtos que os pets precisam.
          Mas não é só isso, encontra também atendimento veterinário com diversos 
          especialistas, exames e serviços, como táxi dog, farmácia e banho e tosa.
          Além disso, o atendimento é personalizado e visa atender as necessidades
          específicas de cada pet. Nosso foco não é apenas atender a todos mas também dar
          auxílio a animais de rua aravés de adoções e apadrinhamento.
        </S.P>
      </S.AboutContainer>
    </S.AboutUsSection>
  )
}