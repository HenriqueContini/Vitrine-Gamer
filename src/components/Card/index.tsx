import styles from './Card.module.css'

export default function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src="https://www.freetogame.com/g/540/thumbnail.jpg" alt="Overwatch 2" />
      <h4 className={styles.card__title}>Overwatch 2</h4>
      <p className={styles.card__genre}>Shooter</p>
    </div>
  )
}
