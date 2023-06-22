import styles from './ApiError.module.css'

interface ApiErrorProps {
  errorMessage: string
  handleError: () => void
}

export default function ApiError({errorMessage, handleError}: ApiErrorProps) {
  return (
    <section className={styles.error__container}>
      <h2 className={styles.error__message}>{errorMessage}</h2>
      <button className={styles.error__button} onClick={handleError}>Recarregar</button>
    </section>
  )
}
