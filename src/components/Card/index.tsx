import styles from './Card.module.css'

interface CardProps {
  title: string
  thumbnail: string
  genre: string
}

export default function Card({title, thumbnail, genre}: CardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={thumbnail} alt={`Imagem ${title}`} />
      <h4 className={styles.card__title}>{title}</h4>
      <p className={styles.card__genre}>{genre}</p>
    </div>
  )
}
