import { useState, useEffect } from 'react'
import * as S from './styles'
import CardsGrid from '../../components/CardsGrid'
import Search from '../../components/Search'
import Game from '../../interfaces/Game'
import ApiResponse from '../../interfaces/ApiResponse'
import { getAllFavorites } from '../../services/favorite'
import Loader from '../../components/Loader'
import ApiError from '../../components/ApiError'
import { Link } from 'react-router-dom'

export default function Favorite() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dataError, setDataError] = useState<{ error: boolean, msg?: string }>({ error: false })
  const [data, setData] = useState<Game[]>([])
  const [filteredData, setFilteredData] = useState<Game[]>([])

  const fetchData = async () => {
    const response: ApiResponse = await getAllFavorites()

    if (response.data) {
      setDataError({ error: false })
      setData(response.data)
      setFilteredData(response.data)
    } else {
      setData([])
      setDataError({
        error: response.error,
        msg: response.msg
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    setDataError({ error: false, msg: '' })
    setData([])
    fetchData()
  }, [])

  if (isLoading) return <Loader />
  if (dataError.error) return <ApiError errorMessage={dataError.msg} showButton={false} />

  return (
    <S.FavoriteContainer>
      {data.length > 0 ?
        <S.Wrapper>
          <CardsGrid filteredData={filteredData} setFilteredData={setFilteredData} updateData={fetchData}/>
          <Search data={data} filteredData={filteredData} setFilteredData={setFilteredData} />
        </S.Wrapper>

        :

        <S.NoDataContainer>
          <S.NoDataText>Nenhum dado encontrado.</S.NoDataText>
          <S.NoDataText>Tente favoritar algum jogo na <Link to={'/'}>tela inicial</Link>!</S.NoDataText>
        </S.NoDataContainer>
      }
    </S.FavoriteContainer>
  )
}
