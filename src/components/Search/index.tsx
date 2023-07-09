import * as S from './styles'
import { useState, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Game from '../../interfaces/Game'
import filter from '../../services/filter'
import { IoClose } from 'react-icons/io5'

interface SearchProps {
  data: Game[]
  filteredData: Game[]
  setFilteredData: Dispatch<SetStateAction<Game[]>>
}

export default function Search({ data, filteredData, setFilteredData }: SearchProps) {
  const [inputGameValue, setInputGameValue] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [genres, setGenres] = useState<string[]>([])

  const filterGame = (value: string) => {
    setInputGameValue(value)
    setSelectedGenre('all')
    setFilteredData(filter(data, value))
  }

  const clearSearch = () => {
    setFilteredData(data)
    setInputGameValue('')
    setSelectedGenre('all')
  }

  const filterGenre = (genre: string) => {
    setSelectedGenre(genre)
    setFilteredData(filter(data, inputGameValue, genre))
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
          <option value="all">Todos</option>
          {genres.map((item, index) => <option key={index} value={item} >{item}</option>)}
        </S.SearchGenre>
      </S.SearchWrapper>
    </S.SearchContainer>
  )
}