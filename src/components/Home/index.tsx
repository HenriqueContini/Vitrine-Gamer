import Banner from '../Banner'
import Card from '../Card'
import Search from '../Search'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Banner />
      <Search />
      <Card />
    </main>
  )
}
