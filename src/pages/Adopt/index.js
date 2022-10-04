import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import { dogInfo } from '../../PetsInfos/DogsInfo.js'
import { catInfo } from '../../PetsInfos/CatsInfo.js'
import 'react-dropdown/style.css'
import SearchLoader from '../../components/SearchLoader/index.js'
import { ThreeDots } from 'react-loader-spinner'

export default function Adopt() {
  const [image, setImage] = useState(['', '', ''])
  const [randomNumber, setRandomNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [pet, setPet] = useState('dog')
  const [test, setTest] = useState(true)
  const [petGender, setPetGender] = useState('ambos')
  const [petInfo, setPetInfo] = useState(pet === 'dog' ? dogInfo : catInfo)

  useEffect(() => {
    document.querySelector('#adopt').classList.add('selected')

    const apiUrl = pet === 'dog' ? `https://dog.ceo/api/breed/mix/images/random/3` : `https://api.thecatapi.com/v1/images/search?limit=3`

    if (test && pet === 'dog') {
      if(petGender === 'feminino') {
        setPetInfo(dogInfo.filter(item => item.gender === 'Feminino'))
      } else if(petGender === 'masculino') {
        setPetInfo(dogInfo.filter(item => item.gender === 'Masculino'))
      } else {
        setPetInfo(dogInfo)
      }
    } else if (test && pet === 'cat') {
      if(petGender === 'feminino') {
        setPetInfo(catInfo.filter(item => item.gender === 'Feminino'))
      } else if(petGender === 'masculino') {
        setPetInfo(catInfo.filter(item => item.gender === 'Masculino'))
      } else {
        setPetInfo(catInfo)
      }
    }

    if(test) {
      setTest(false)
      setIsLoading(true)

      axios.get(apiUrl)
      .then(res => {
        setImage(pet === 'dog' ? res.data.message : res.data.map((item) => item.url))
        setRandomNumber(Math.floor(Math.random() * (petInfo.length - 13)))
        setTimeout(() => {
          setIsLoading(false)
        }, 1500)  
      })
      .catch(err => console.log("Something don't work", err))
    }
  }, [test, petInfo, pet, petGender])
  
  function handleSearchNewDog(e) {
    setTimeout(() => {
      if (!e.target.classList.contains('loading')) {
        e.target.classList.add('loading')
        setTest(true)

        setTimeout(() => {
          e.target.classList.remove('loading')
        }, 2500)
      }
    }, 200)
  }

  const options = ['Ambos', 'Feminino', 'Masculino']

  return (
    <S.AdoptSection>
      <S.SearchContainer>
        <S.FilterTitle>FILTRO:</S.FilterTitle>
        <S.FilterContainer>
          <S.PetChoseContainer>
            <S.PetInput type='radio' onClick={() => setPet('dog')} name='pet' id='dog' defaultChecked />
            <S.PetLabel htmlFor='dog'>Cachorro</S.PetLabel>
          
            <S.PetInput type='radio' onClick={() => setPet('cat')} name='pet' id='cat' />
            <S.PetLabel htmlFor='cat'>Gato</S.PetLabel>
          </S.PetChoseContainer>
          <S.DropdownMenu id='dropdown' options={options} onChange={e => setPetGender(e.value.toLowerCase())}  placeholder='Sexo do pet' />
        </S.FilterContainer>
        <S.SearchBtn onClick={e => handleSearchNewDog(e)}>BUSCAR</S.SearchBtn>
      </S.SearchContainer>

      <S.CardsContainer>
        {image.map((item, index) => (
          <S.PetCard key={index}>
          <S.ImageContainer>
            {isLoading ? <SearchLoader /> :
              <a href={image[index]} target='_blank' rel='noreferrer'>
                <S.PetImage src={item} alt='Foto de cachorro para adoção' />
              </a>
            }
            </S.ImageContainer>
            <S.PetDescription>
            {isLoading ? <ThreeDots color='#00453A' width='40' /> :
              <S.InformationList>
                <S.PetInformation>
                <span>Nome:</span> {petInfo[randomNumber + index].name}
              </S.PetInformation>
              <S.PetInformation>
                <span>Idade:</span> {petInfo[randomNumber + index].age} ano(s) 
              </S.PetInformation>
              <S.PetInformation>
                <span>Sexo:</span> {petInfo[randomNumber + index].gender}
              </S.PetInformation>
              <S.PetInformation>
                <span>Raça:</span> Não definida
              </S.PetInformation>
              </S.InformationList>
            }
            </S.PetDescription>
          <S.BtnContainer>
            <S.AdoptBtn>
              ADOTAR
            </S.AdoptBtn>
            <S.PatronizeBtn>
              APADRINHAR
            </S.PatronizeBtn>
          </S.BtnContainer>
        </S.PetCard>
        ))}
      </S.CardsContainer>
    </S.AdoptSection>
  )
}