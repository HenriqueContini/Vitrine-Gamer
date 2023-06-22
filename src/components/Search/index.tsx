import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Game from '../../interfaces/Game'
import styles from './Search.module.css'
import { IoClose } from 'react-icons/io5'

interface SearchProps {
  data: Game[]
  filteredData: Game[]
  setFilteredData: Dispatch<SetStateAction<Game[] | undefined>>
}

export default function Search({ data, filteredData, setFilteredData }: SearchProps) {
  const [inputGameValue, setInputGameValue] = useState<string>('')
  const [genres, setGenres] = useState<string[]>([])

  const filterGame = (value: string) => {
    setInputGameValue(value)
    setFilteredData(data.filter(game => game.title.toUpperCase().includes(value.toUpperCase())))
  }

  const clearGame = () => {
    setInputGameValue('')
    setFilteredData(data)
  }

  const filterGenre = (genre: string) => {
    setFilteredData(filteredData.filter(game => game.genre === genre))
  }

  const clearGenre = () => {
    filterGame(inputGameValue)
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
      <select name="genre" className={styles.search__genre__select}>
        <option value="" onClick={() => clearGenre()}>Selecione o gênero </option>
        {genres.map((item, index) => <option key={index} value={item} onClick={() => filterGenre(item)}>{item}</option>)}
      </select>
    </div>
  )
}
