import styles from './header.module.css'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo Vitrine Gamer" />
    </header>
  )
}