import styles from './header.module.css'
import icon from '../../assets/control-icon.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.icon__container}>
        <img src={icon} alt="Ícone Vitrine Gamer" />
        <h1>Vitrine Gamer</h1>
      </div>
    </header>
  )
}