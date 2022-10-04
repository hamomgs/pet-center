import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  margin-top: 100px;
  background-color: var(--primary-color);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 270px;
  margin: 0 auto;
  padding: 0 25px;
`

export const Title = styled.h2`
  font-size: 45px;
  color: #fff;
  cursor: default;
  user-select: none;
  padding-bottom: 24px;
  
  span {
    font-weight: 400;
    padding-left: 10px;
  }
  
  *:nth-child(1) {
    color: #b3e5e4;
  }
`

export const P = styled.p`
  padding-bottom: 15px;
  color: #FFFAF1;
`

export const SocialMedias = styled.div`
  display: flex;
  gap: 32px;
`

export const SocialMediaLink = styled.a`
  color: #fff;
  font-size: 30px;
`
