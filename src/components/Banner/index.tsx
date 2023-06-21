import styles from './Banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner__container}>
      <img className={styles.banner__img} src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="Banner" />
    </section>
  )
}