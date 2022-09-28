import styled from 'styled-components'
import bgImg from '../../assets/background.jpg'

export const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to left, #0008 50%, #0008 50%), url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 80px;
  margin-top: -80px;
  padding-top: 8vw;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 25px 150px 0;
`

export const Title = styled.h1`
  width: 45%;
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

export const ScheduleBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 260px;
  height: 52px;
  border: solid 2px #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.5s ease;
  margin: 30px 0;
  background-color: transparent;

  :hover {
    background-color: #fff;
    color: #008585;
  }

  * {
    font-size: 20px;
  }
`