import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ServicesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 25px 0 25px;
`

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`

export const LittleTitle = styled.h4`
  text-align: center;
  color: var(--primary-color);
`

export const Title = styled.h2`
  width: 550px;
  margin: 30px auto;
  text-align: center;
  font-size: 40px;
  color: #22262a;
`

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 350px;
  height: 230px;
  padding: 24px;
  border-radius: 6px;
  border: solid 2px var(--secondary-color);
`

export const Icon = styled(FontAwesomeIcon)`
  padding: 10px;
  border-radius: 50%;
  font-size: 12px;
  color: var(--primary-color);
  background-color: var(--secondary-color);
`

export const ServiceTitle = styled.h3`
  font-size: 24px;
  color: #212529;
`

export const ServiceDescription = styled.p`
  color: #495057;
`