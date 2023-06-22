import styles from './Banner.module.css'

interface BannerProps {
  title: string
  thumbnail: string
  short_description: string
}

export default function Banner({title, thumbnail, short_description}:BannerProps) {
  return (
    <section className={styles.banner__container}>
      <img className={styles.banner__img} src={thumbnail} alt={`Banner: ${title}`} />
      <article className={styles.banner__article}>
        <h2 className={styles.banner__title}>{title}</h2>
        <p className={styles.banner__text}>{short_description}</p>
      </article>
    </section>
  )
}