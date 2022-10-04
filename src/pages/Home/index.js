import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import AboutUs from '../../components/AboutUs/index.js'
import Contact from '../../components/Contact/index.js'
import Footer from '../../components/Footer/index.js'
import Services from '../../components/Services/index.js'
import * as S from './styles.js'

export default function Home() {
  useEffect(() => {
    document.querySelector('#home').classList.add('selected')
  }, [])

  return (
    <S.HomeSection>
      <S.Container>
        <S.Title>O melhor lugar para seu amiguinho</S.Title>
        <S.P>
          Os veterinários do Pet Center cuidam da vida do seu pet com amor, vão além dos sintomas para tratar a causa raíz da doença e proporcionar uma cura a longo prazo.
        </S.P>
        <S.ScheduleBtn href='https://api.whatsapp.com/send?phone=5531978649999' title='Entre em contato pelo whatsapp'>
        <FontAwesomeIcon icon={faWhatsapp} ></FontAwesomeIcon>
          Agende uma consulta
        </S.ScheduleBtn>
        <S.P>Nossa Localização: Rua Cristiano, 957</S.P>
      </S.Container>
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </S.HomeSection>
  )
}