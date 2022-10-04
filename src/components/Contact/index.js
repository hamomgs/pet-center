import React from 'react'
import * as S from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ContactImg from '../../assets/contact-image.png'

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
        <S.ContactLink href='https://api.whatsapp.com/send?phone=5531978649999' title='Entre em contato pelo whatsapp'>
            <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon>
            Agende uma consulta
          </S.ContactLink>
      </S.ContactContainer>
      <S.Image src={ContactImg} alt="Homem usando celular" />
    </S.ContactSection>
  )
}