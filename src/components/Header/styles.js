import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  background-color: #008585;
`

export const Title = styled.h2`
  font-size: 30px;
  color: #fff;
  cursor: default;
  user-select: none;
  
  span {
    font-weight: 400;
    padding-left: 10px;
  }
  
  *:nth-child(1) {
    color: #b3e5e4;
  }
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
  font-weight: 500;
  transition: color 0.5s ease;
  
  &.selected {
    color: #b3e5e4;
    padding-bottom: 25px;
    border-bottom: solid 5px #b3e5e4;
    cursor: default;
  }
    
  :hover {
    color: #b3e5e4;
  }
`

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 250px;
  height: 50px;
  border: solid 2px #fff;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: #008585;
  transition: all 0.5s ease;
  background-color: #fff;

  :hover {
    background-color: transparent;
    color: #fff;
  }

  * {
    font-size: 20px;
  }
`