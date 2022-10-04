import styled from 'styled-components'
import LoadingBg from '../../assets/loading-bg.gif'
import Dropdown from 'react-dropdown'

export const AdoptSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;
`

export const DropdownMenu = styled(Dropdown)`
  .Dropdown-control {
    width: 155px;
    cursor: pointer;
    border-radius: 8px;
    border-color: var(--primary-color); 
  }

  .Dropdown-menu {
    border-radius: 8px;
  }

  .Dropdown-option{
    :hover {
      background-color: var(--secondary-color);
    }
  }
`

export const SearchBtn = styled.button`
  width: 150px;
  padding: 10px 0;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: var(--primary-color);

  &:hover {
    opacity: 0.8;
  }

  &.loading {
    opacity: 0.5;
    cursor: wait;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`

export const PetCard = styled.div`
  height: 100%;
  padding: 24px;
  border-radius: 6px;
  border: solid 2px var(--secondary-color);
  box-shadow: 0 0 2px var(--primary-color);
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const PetImage = styled.img`
  background-image: url(${LoadingBg});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  width: 240px;
  min-height: 240px;
  max-height: 240px;
  border-radius: 6px;
  border: solid 3px var(--primary-color);
  background-color: #fff;
`

export const PetDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 137px;
  font-weight: bold;
  color: #212529;
`

export const InformationList = styled.ul`
  width: 100%;
  min-height: 97px;
  margin: 20px 0;
`

export const PetInformation = styled.li`
  margin: 2.5px 0;
  font-weight: 500;

  span {
    font-weight: bold;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    width: 240px;
    margin: 0 auto;
    padding: 10px 0;
    color: #fff;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
  `

export const AdoptBtn = styled.button`
  background-color: var(--primary-color);
  border-radius: 3px 3px 0 0;
`

export const PatronizeBtn = styled.button`
  background-color: #5EAF9F;
  border-radius: 0 0 3px 3px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 80%;
  margin-top: 20px;
`

export const FilterTitle = styled.h4`
  color: var(--primary-color);
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  input {
    display: none;
  }
`

export const PetChoseContainer = styled.div`
  display: flex;
  gap: 15px;
`

export const PetLabel = styled.label`
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 5px -3.5px 0;
    border-radius: 50%;
    border: solid 1px var(--primary-color);
    cursor: pointer;
    transition: all 0.2s;
  }
`

export const PetInput = styled.input`
  &:checked + label::before {
    background-color: var(--primary-color);
  }
`