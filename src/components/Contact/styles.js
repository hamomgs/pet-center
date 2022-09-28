import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 68px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 25px 0 25px;
  transform: scale(1.1);
`

export const ContactContainer = styled.div`
  width: 405px;
`

export const Icon = styled(FontAwesomeIcon)`
  color: #00856F;

  &.btnIcon {
    color: #DCE9E2;
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 455px;
  padding: 50px 0;
`

export const FormTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  color: #212529;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 210px;
  font-size: 14px;
  color: #00453A;

  &.textArea {
    width: 356px;
    height: 120px;
  }
`

export const Input = styled(InputMask)`
  width: 100%;
  height: 34px;
  border: solid 0.6px #4950574D;
  border-radius: 2.4px;
  padding: 0 10px;
  color: #212529;
  background-color: #DCE9E2;

  &::placeholder{
    color: #49505780;
  }

  &:focus {
    border-color: #00856F;
  }
`

export const Textarea = styled.textarea`
  width: 436px;
  height: 100%;
  resize: none;
  border: solid 0.6px #4950574D;
  border-radius: 2.4px;
  padding: 10px;
  color: #212529;
  background-color: #DCE9E2;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #DCE9E2;
  }

  &::-webkit-scrollbar-thumb {
    background: #00856F;
  }

  &::placeholder{
    color: #49505780;
  }

  &:focus {
    border-color: #00856F;
  }
`

export const SendBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  border: none;
  color: #DCE9E2;
  font-weight: bold;
  cursor: pointer;
  background-color: #00856F;
`