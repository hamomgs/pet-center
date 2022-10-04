import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  background-color: var(--primary-color);
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
  position: relative;
  color: #fff;
  transition: color 0.2s ease;
  font-weight: 500;
  z-index: 1;
  
  &:after {
    content: '.';
    position: absolute;
    left: 0;
    top: 45px;
    width: 0;
    height: 5px;
    text-align: left;
    opacity: 0;
    color: transparent;
    transition: all 0.5s;
    background-color: #b3e5e4;
  }
  
  &.selected:after {
    width: 100%;
    z-index: -10;
    animation: fill 1s forwards;
    -webkit-animation: fill 1s forwards;
    -moz-animation: fill 1s forwards;
    opacity: 1;
  }

  &.selected {
    color: #b3e5e4;
    cursor: default;
  }
    
  :hover {
    color: #b3e5e4;
  }
`