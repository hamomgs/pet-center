import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 68px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 25px 150px 25px;
  transform: scale(1.1);
`

export const ContactContainer = styled.div`
  width: 405px;
`

export const Icon = styled(FontAwesomeIcon)`
  color: var(--primary-color);

  &.btnIcon {
    color: var(--secondary-color);
  }
`

export const Title = styled.h2`
  font-size: 40px;
  line-height: 50px;
  color: #212529;
  padding-bottom: 40px;
`

export const P = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #495057;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 16px;
`

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 250px;
  height: 50px;
  margin-top: 35px;
  border: solid 2px var(--primary-color);
  border-radius: 40px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  transition: all 0.5s ease;
  background-color: var(--primary-color);

  :hover {
    background-color: transparent;
    color: var(--primary-color);
  }

  * {
    font-size: 20px;
  }
`

export const Image = styled.img`
`