import React from 'react'
import * as S from './styles.js'
import { faDog, faUserDoctor, faTaxi, faBullseye, faShower, faStethoscope } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
 return (
    <S.ServicesSection>
      <S.LittleTitle>SERVIÇOS</S.LittleTitle>
      <S.Title>Como podemos ajudar seu pet a se sentir melhor?</S.Title>
      <S.ServicesContainer>
        <S.ServiceBox>
          <S.Icon icon={faDog} ></S.Icon>
          <S.ServiceTitle>Dog Walker</S.ServiceTitle>
          <S.ServiceDescription>
            Cachorros que só vivem em ambientes fechados e com pouco passeio
            acabam se tornando pouco sociáveis e muito hiperativos.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faStethoscope} ></S.Icon>
          <S.ServiceTitle>Clínico Geral</S.ServiceTitle>
          <S.ServiceDescription>
            É o profissional especializado na prevenção, diagnóstico e 
            tratamento de doenças animais, ferimentos ou outros problemas
            de saúde.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faTaxi} ></S.Icon>
          <S.ServiceTitle>Taxi Dog</S.ServiceTitle>
          <S.ServiceDescription>
            O serviço de taxi dog foi criado para facilitar a vida dos tutores
            de animais de estimação que não tem tempo o suficiente para levá-los e buscá-los.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faBullseye} ></S.Icon>
          <S.ServiceTitle>Adestramento</S.ServiceTitle>
          <S.ServiceDescription>
            Oferece uma série de benefícios tanto para o tutor quanto para
            o cachorro, contribuindo para a convivência e relacionamento do tutor com o dog.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faShower} ></S.Icon>
          <S.ServiceTitle>Banho e Tosa</S.ServiceTitle>
          <S.ServiceDescription>
            Não é somente uma questão de estética para os pets.
            Esse serviço é fundamental, pois envolve também saúde e higiene do amiguinho.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faUserDoctor} ></S.Icon>
          <S.ServiceTitle>Castração</S.ServiceTitle>
          <S.ServiceDescription>
            A castração elimina a possibilidade de câncer uterino em fêmeas,
            que pode ser fatal se não for tratado. Também previne o câncer testicular em machos.
          </S.ServiceDescription>
        </S.ServiceBox>
      </S.ServicesContainer>
    </S.ServicesSection>
  )
}