import React, { useEffect } from 'react'
import * as S from './styles.js'
import { faDog, faUserDoctor, faTaxi, faBullseye, faShower, faScissors } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  useEffect(() => {
    document.querySelector('#services').classList.add('selected')
  }, [])

  return (
    <S.ServicesSection>
      <S.Title>Como podemos ajudar seu pet a se sentir melhor?</S.Title>
      <S.ServicesContainer>
        <S.ServiceBox>
          <S.Icon icon={faDog} ></S.Icon>
          <S.ServiceTitle>Dog Walker</S.ServiceTitle>
          <S.ServiceDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum accusantium, laudantium excepturi eum explicabo adipisci.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faUserDoctor} ></S.Icon>
          <S.ServiceTitle>Clínico Geral</S.ServiceTitle>
          <S.ServiceDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum accusantium, laudantium excepturi eum explicabo adipisci.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faTaxi} ></S.Icon>
          <S.ServiceTitle>Taxi Dog</S.ServiceTitle>
          <S.ServiceDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum accusantium, laudantium excepturi eum explicabo adipisci.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faBullseye} ></S.Icon>
          <S.ServiceTitle>Adestramento</S.ServiceTitle>
          <S.ServiceDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum accusantium, laudantium excepturi eum explicabo adipisci.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faShower} ></S.Icon>
          <S.ServiceTitle>Banho</S.ServiceTitle>
          <S.ServiceDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum accusantium, laudantium excepturi eum explicabo adipisci.
          </S.ServiceDescription>
        </S.ServiceBox>
        <S.ServiceBox>
          <S.Icon icon={faScissors} ></S.Icon>
          <S.ServiceTitle>Tosa</S.ServiceTitle>
          <S.ServiceDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum accusantium, laudantium excepturi eum explicabo adipisci.
          </S.ServiceDescription>
        </S.ServiceBox>
      </S.ServicesContainer>
    </S.ServicesSection>
  )
}