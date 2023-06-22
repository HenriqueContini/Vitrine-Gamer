import { useEffect, useState } from 'react'
import Banner from '../Banner'
import Card from '../Card'
import Search from '../Search'
import styles from './Home.module.css'
import getGamesData from '../../services/gamesData'
import ApiResponse from '../../interfaces/ApiResponse'
import Loader from '../Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchData = async () => {
    const response: ApiResponse | undefined = await getGamesData()

    if(response?.data) {
      console.log("Dados:")
      console.log(response.data)
    } else if (response?.code === 'ECONNABORTED') {
      console.log('O servidor demorou para responder, tente mais tarde')
      console.log(response.code)
    } else if (response?.status && response.status >= 500 && response.status <= 509) {
      console.log('O servidor fahou em responder, tente recarregar a página')
      console.log(response?.status)
    } else {
      console.log('O servidor não conseguirá responder por agora, tente voltar novamente mais tarde')
      console.log(response?.status)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    /* fetchData() */
  }, [])

  return (
    <main className={styles.container}>
      {isLoading && <Loader />}
      
      {/* <Banner />
      <Search />
      <section className={styles.card__container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section> */}
    </main>
  )
}
