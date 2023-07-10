import * as S from './styles'
import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Search from '../../components/Search'
import getGamesData from '../../services/gamesData'
import ApiResponse from '../../interfaces/ApiResponse'
import Loader from '../../components/Loader'
import ApiError from '../../components/ApiError'
import Game from '../../interfaces/Game'
import CardsGrid from '../../components/CardsGrid'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dataError, setDataError] = useState<{ error: boolean, msg?: string }>({ error: false })
  const [data, setData] = useState<Game[]>([])
  const [filteredData, setFilteredData] = useState<Game[]>([])
  const [bannerData, setBannerData] = useState<Game>()

  const fetchData = async () => {
    const response: ApiResponse = await getGamesData()

    if (response.data) {
      setDataError({ error: false })
      setData(response.data)
      setFilteredData(response.data)

      let newBanner: Game = response.data[Math.floor(Math.random() * response.data.length)]
      setBannerData(newBanner)
    } else {
      setData([])
      setDataError({
        error: response.error,
        msg: response.msg
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
    setIsLoading(true)
    setDataError({ error: false })
    setData([])
    fetchData()
  }, [])

  if (isLoading) return <Loader />
  if (dataError.error) return <ApiError errorMessage={dataError.msg} handleError={handleErrorButton} />

  return (
    <S.HomeContainer>
      {bannerData && <Banner data={bannerData} />}
      <S.Wrapper>
        <CardsGrid data={filteredData} />
        <Search data={data} filteredData={filteredData} setFilteredData={setFilteredData} />
      </S.Wrapper>
    </S.HomeContainer>
  )
}
