import React from 'react'
import * as S from './styles.js'
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <S.ContactSection>
      <S.ContactContainer>
        <S.Title>Entre em contato com a gente!</S.Title>
        <S.P>
          <S.Icon icon={faMap}></S.Icon>
          Rua Cristiano, 957
        </S.P>
        <S.P>
          <S.Icon icon={faEnvelope}></S.Icon>
          contato@petcenter.com
        </S.P>
      </S.ContactContainer>

      <S.FormContainer onSubmit={e => e.preventDefault()}>
        <S.FormTitle>
          <S.Icon icon={faEnvelope}></S.Icon>
          Preencha o formulário
        </S.FormTitle>
        <S.InputsContainer>
          <S.Label for='firstName'>Primeiro nome
          <S.Input type='text' id='firstName' name='firstName' placeholder='Primeiro nome' required /></S.Label>

          <S.Label for='lastName'>Último nome
          <S.Input type='text' id='lastName' name='lastName' placeholder='Último nome' required /></S.Label>

          <S.Label for='whatsapp'>Seu Whatsapp
          <S.Input mask='(99) 99999-9999' type='tel' id='whatsapp' name='whatsapp' placeholder='(00) 00000-0000' required /></S.Label>

          <S.Label for='email'>Email
          <S.Input type='email' id='email' name='email' placeholder='exemplo@email.com' required /></S.Label>

          <S.Label for='message' className='textArea'> Mensagem
          <S.Textarea id='message' placeholder='Digite sua mensagem...' minLength='20' maxLength='300' required /></S.Label>

          <S.SendBtn>
            Enviar
            <S.Icon icon={faArrowRight} className='btnIcon'></S.Icon>
          </S.SendBtn>
        </S.InputsContainer>
      </S.FormContainer>
    </S.ContactSection>
  )
}