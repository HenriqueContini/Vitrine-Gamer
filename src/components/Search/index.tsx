import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Game from '../../interfaces/Game'
import styles from './Search.module.css'
import { IoClose } from 'react-icons/io5'

interface SearchProps {
  data: Game[]
  setFilteredData: Dispatch<SetStateAction<Game[]>>
}

export default function Search({ data, setFilteredData }: SearchProps) {
  const [inputGameValue, setInputGameValue] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('default')
  const [genres, setGenres] = useState<string[]>([])

  const filterGame = (value: string) => {
    setInputGameValue(value)
    setFilteredData(data.filter(game => game.title.toUpperCase().includes(value.toUpperCase())))
    setSelectedGenre('default')
  }

  const clearGame = () => {
    setInputGameValue('')
    setFilteredData(data)
    setSelectedGenre('default')
  }

  const filterGenre = (genre: string) => {
    setSelectedGenre(genre)

    if (genre === 'default' && inputGameValue) {
      filterGame(inputGameValue)
    } else if (genre === 'default' && !inputGameValue) {
      setFilteredData(data)
    } else if (genre !== 'default' && inputGameValue) {
      const newArr = data.filter(item => item.genre === genre && item.title.toUpperCase().includes(inputGameValue.toUpperCase()))
      setFilteredData(newArr)
    } else {
      setFilteredData(data.filter(game => game.genre === genre))
    }
  }

  useEffect(() => {
    let genreArr: string[] = []

    data.forEach(item => {
      if (!genreArr.includes(item.genre)) {
        genreArr.push(item.genre)
      }
    })

    setGenres(genreArr)
  }, [])


  return (
    <div className={styles.search__container}>
      <h3 className={styles.title}>Busque um <span>game</span></h3>
      <div className={styles.search__game}>
        <input type="search" className={styles.search__game__input} placeholder='Nome de um jogo' value={inputGameValue} onChange={(e) => filterGame(e.target.value)} />
        <div className={styles.search__game__icon} onClick={() => clearGame()}>
          <IoClose />
        </div>
      </div>
      <select name="genre" className={styles.search__genre__select} value={selectedGenre} onChange={(e) => filterGenre(e.target.value)}>
        <option value="default">Selecione o gênero </option>
        {genres.map((item, index) => <option key={index} value={item} >{item}</option>)}
      </select>
    </div>
  )
}
