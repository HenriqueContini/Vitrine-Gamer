import styles from './Banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner__container}>
      <img className={styles.banner__img} src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="Banner" />
      <article className={styles.banner__article}>
        <h2 className={styles.banner__title}>Overwatch 2</h2>
        <p className={styles.banner__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis nihil ipsam nostrum quaerat quia
          dolore facilis a magnam voluptatibus! Tempora harum eum autem temporibus,
          nihil consequuntur sequi iure pariatur.
        </p>
      </article>
    </section>
  )
}