import Banner from '../Banner'
import Search from '../Search'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Banner />
      <Search />
    </main>
  )
}
