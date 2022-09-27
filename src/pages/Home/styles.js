import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bgImg from '../../assets/background.png'

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to left, #0008 50%, #0008 50%), url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  margin-top: -80px;
  padding-top: 5vw;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 25px;
`

export const Title = styled.h1`
  width: 35%;
  color: #fff;
  font-size: 50px;
  padding-bottom: 30px;
`

export const P = styled.p`
  width: 55%;
  font-size: 18px;
  font-weight: bold;
  color: #d3d3d3;
  line-height: 30px;
`

export const SeeMore = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 50px;
  border: solid 2px #fff;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  transition: all 0.5s ease;
  margin: 30px 0;
  background-color: transparent;

  :hover {
    background-color: #fff;
    color: #008585;
  }
`