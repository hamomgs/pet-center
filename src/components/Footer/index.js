import React from 'react'
import * as S from './styles.js'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <S.Footer>
      <S.Container>
        <div>
          <S.Title>
            <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            <span>Pet</span>Center
          </S.Title>
          <S.P>©2022 - PetCenter. </S.P>
          <S.P>Todos os direitos reservados.</S.P>
        </div>
        <S.SocialMedias>
          <S.SocialMediaLink href="https://www.instagram.com/" title='Instagram'>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="https://www.facebook.com/" title='Facebook'>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="https://youtube.com/" title='Youtube'>
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </S.SocialMediaLink>
        </S.SocialMedias>
      </S.Container>
    </S.Footer>
  )
}