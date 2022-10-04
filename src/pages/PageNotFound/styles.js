import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageNotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 0 25px;
`

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  min-width: 200px;
  user-select: none;
  pointer-events: none;
`

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin: 25px 0 10px 0;
`

export const P = styled.p`
  font-size: 18px;
  color: #4d4d4d;
`

export const GoToHomeLink = styled(Link)`
  color: #fff;
  border-radius: 40px;
  margin-top: 50px;
  padding: 15px 20px;
  transition: all 0.3s;
  background-color: var(--primary-color);

  &:hover {
    opacity: 0.8;
  }
`