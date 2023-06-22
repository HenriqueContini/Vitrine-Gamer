import { useState, Dispatch, SetStateAction } from 'react'
import Game from '../../interfaces/Game'
import styles from './Search.module.css'
import { IoClose } from 'react-icons/io5'

interface SearchProps {
  data: Game[]
  setFilteredData: Dispatch<SetStateAction<Game[] | undefined>>
}

export default function Search({data, setFilteredData}:SearchProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const filterData = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value
    setInputValue(input)

    setFilteredData(data.filter(game => game.title.toUpperCase().includes(input.toUpperCase())))
  }

  const clearFilter = () =>  {
    setInputValue('')
    setFilteredData(data)
  }

  return (
    <div className={styles.search__container}>
      <h3 className={styles.search__title}>Busque um <span>game</span></h3>
      <div className={styles.search}>
        <input type="text" className={styles.search__input} placeholder='Nome de um jogo' value={inputValue} onChange={(e) => filterData(e)}/>
        <div className={styles.search__icon} onClick={() => clearFilter()}>
          <IoClose />
        </div>
      </div>
    </div>
  )
}
