import { useEffect, useState } from 'react'
import Banner from '../Banner'
import Card from '../Card'
import Search from '../Search'
import styles from './Home.module.css'
import getGamesData from '../../services/gamesData'
import ApiResponse from '../../interfaces/ApiResponse'
import Loader from '../Loader'
import ApiError from '../ApiError'
import Game from '../../interfaces/Game'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dataError, setDataError] = useState<{ error: boolean, msg: string }>({ error: false, msg: '' })
  const [data, setData] = useState<Game[]>([])
  const [filteredData, setFilteredData] = useState<Game[]>()
  const [bannerData, setBannerData] = useState<Game>()

  const fetchData = async () => {
    const response: ApiResponse | undefined = await getGamesData()
    console.log(response)

    if (response.data) {
      setDataError({ error: false, msg: '' })
      setData(response.data)
      setFilteredData(response.data)

      let newBanner: Game = response.data[Math.floor(Math.random() * response.data.length)]
      setBannerData(newBanner)
    } else {
      setData([])
      setDataError({
        error: response.error,
        msg: response.msg!
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
    /* setIsLoading(true)
    setDataError({ error: false, msg: '' })
    setData([])
    fetchData() */
  }, [])

  return (
    <main className={styles.container}>
      {isLoading ? <Loader /> :
        <>
          {!dataError.error && data ? <>
            {bannerData && <Banner title={bannerData.title} thumbnail={bannerData.thumbnail} short_description={bannerData.short_description} />}
            <Search data={data} filteredData={filteredData} setFilteredData={setFilteredData}/>
            <section className={styles.card__container}>
              {filteredData && filteredData.map(game => <Card key={game.id} title={game.title} thumbnail={game.thumbnail} genre={game.genre} />)}
            </section>
          </> :
            <ApiError errorMessage={dataError.msg} handleError={handleErrorButton} />
          }
        </>
      }
    </main>
  )
}
