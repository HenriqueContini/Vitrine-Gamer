import Banner from '../Banner'
import Card from '../Card'
import Search from '../Search'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Banner />
      <Search />
      <section className={styles.card__container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}
