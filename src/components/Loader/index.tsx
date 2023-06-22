import { TailSpin } from 'react-loader-spinner'
import styles from './Loader.module.css'

export default function Loader() {
  return (
    <section className={styles.loader__container}>
      <TailSpin color='#0094FF' wrapperClass={styles.loader}/>
      <h2 className={styles.loader__title}>Carregando dados...</h2>
    </section>
  )
}
