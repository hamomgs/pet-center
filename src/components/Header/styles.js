import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bgImg from '../../assets/background.png'

export const Header = styled.header`
  position: relative;
  z-index: 9;
  background-image: linear-gradient(to left, #0008 50%, #0008 50%), url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`

export const Title = styled.h2`
  font-size: 30px;
  color: #fff;
`

export const NavigationMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 25px;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-transform: uppercase;
`

export const NavLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  transition: all 0.5s ease;

  &.selected {
    color: #008585;
  }
    
  :hover {
    color: #008585;
  }
`

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  color: #008585;
  transition: all 0.5s ease;
  background-color: #fff;

  :hover {
    background-color: #008585;
    color: #fff;
  }

  * {
    font-size: 20px;
  }
`