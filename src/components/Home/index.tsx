import { useEffect, useState } from 'react'
import Banner from '../Banner'
import Card from '../Card'
import Search from '../Search'
import styles from './Home.module.css'
import getGamesData from '../../services/gamesData'
import ApiResponse from '../../interfaces/ApiResponse'
import Loader from '../Loader'
import ApiError from '../ApiError'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dataError, setDataError] = useState<{error: boolean, msg: string}>({error: false, msg: ''})

  const fetchData = async () => {
    const response: ApiResponse | undefined = await getGamesData()

    if (response?.data) {
      console.log("Dados:")
      console.log(response.data)
    } else if (response?.code === 'ECONNABORTED') {
      setDataError({
        error: true,
        msg: 'O servidor demorou para responder, tente mais tarde'
      })
    } else if (response?.status && response.status >= 500 && response.status <= 509) {
      setDataError({
        error: true,
        msg: 'O servidor falhou em responder, tente recarregar a página'
      })
    } else {
      setDataError({
        error: true,
        msg: 'O servidor não conseguirá responder por agora, tente voltar novamente mais tarde'
      })
    }

    setIsLoading(false)
  }

  const handleErrorButton = () => {
    setIsLoading(true)
    setDataError({
      error: false,
      msg: ''
    })

    fetchData()
  }

  useEffect(() => {
    /* fetchData() */
  }, [])

  return (
    <main className={styles.container}>
      {isLoading ? <Loader /> :
        dataError.error && <ApiError errorMessage={dataError.msg} handleError={handleErrorButton}/>
        
      }


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
