import * as S from './styles'
import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Game from '../../interfaces/Game'
import { IoClose } from 'react-icons/io5'

interface SearchProps {
  data: Game[]
  filteredData: Game[]
  setFilteredData: Dispatch<SetStateAction<Game[]>>
}

export default function Search({ data, filteredData, setFilteredData }: SearchProps) {
  const [inputGameValue, setInputGameValue] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('default')
  const [genres, setGenres] = useState<string[]>([])

  const filterGame = (value: string) => {
    setInputGameValue(value)
    setFilteredData(data.filter(game => game.title.toUpperCase().includes(value.toUpperCase())))
    setSelectedGenre('default')
  }

  const clearSearch = () => {
    setInputGameValue('')
    setFilteredData(data)
    setSelectedGenre('default')
  }

  const filterGenre = (genre: string) => {
    setSelectedGenre(genre)

    if (genre === 'default') {
      return filterGame(inputGameValue)
    }

    if (selectedGenre !== 'default' && genre !== 'default') {
      filterGame(inputGameValue)
      const newArr = data.filter(item => item.genre === genre)
      return setFilteredData(newArr)
    }

    const newArr = filteredData.filter(item => item.genre === genre)
    return setFilteredData(newArr)
  }

  useEffect(() => {
    let genreArr: string[] = []

    filteredData.forEach(item => {
      if (!genreArr.includes(item.genre)) {
        genreArr.push(item.genre)
      }
    })

    setGenres(genreArr)
  }, [filteredData])

  return (
    <S.SearchContainer>
      <S.SearchTitleWrapper>
        <S.SearchTitle>Filtros</S.SearchTitle>
        <S.ClearButton onClick={clearSearch}><IoClose /></S.ClearButton>
      </S.SearchTitleWrapper>
      <S.SearchWrapper>
        <S.SearchLabel htmlFor='name'>Nome</S.SearchLabel>
        <S.SearchInput id='name' type='search' placeholder='Nome do jogo' value={inputGameValue} onChange={(e: ChangeEvent<HTMLInputElement>) => filterGame(e.target.value)} />
      </S.SearchWrapper>
      <S.SearchWrapper>
        <S.SearchLabel htmlFor='genre'>Gênero</S.SearchLabel>
        <S.SearchGenre id='genre' value={selectedGenre} onChange={(e: ChangeEvent<HTMLSelectElement>) => filterGenre(e.target.value)}>
          <option value="default">{selectedGenre === 'default' ? "Selecione o gênero" : "Limpar seleção" }</option>
          {genres.map((item, index) => <option key={index} value={item} >{item}</option>)}
        </S.SearchGenre>
      </S.SearchWrapper>
    </S.SearchContainer>
  )
}