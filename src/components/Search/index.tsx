import styles from './Search.module.css'
import { IoClose } from 'react-icons/io5'

export default function Search() {
  return (
    <div className={styles.search__container}>
      <h2 className={styles.search__title}>Busque um <span>game</span></h2>
      <div className={styles.search}>
        <input type="text" className={styles.search__input} placeholder='Nome de um jogo' />
        <div className={styles.search__icon}>
          <IoClose />
        </div>
      </div>
    </div>
  )
}
