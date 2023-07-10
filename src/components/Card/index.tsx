import { useState } from 'react'
import Game from '../../interfaces/Game'
import { addFavorite } from '../../services/favorite'
import * as S from './styles'
import {BsFillHeartFill} from 'react-icons/bs'

interface CardProps {
  data: Game
}

export default function Card({ data }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isFavorite ? true : false)

  const handleFavorite = async () => {
    let response = await addFavorite(data)
    if (!response.error) {
      setIsFavorite(true)
    }
  }
  
  return (
    <S.CardContainer>
      <S.RowWrapper>
        <S.CardTitle>{data.title}</S.CardTitle>
        <S.Favorite $favorite={isFavorite} onClick={() => handleFavorite()}>
          <BsFillHeartFill />
        </S.Favorite>
      </S.RowWrapper>
      <S.CardImg src={data.thumbnail} alt={`Imagem ${data.title}`} loading='lazy' />
      <S.RowWrapper>
        <S.CardText>{data.genre} - {new Date(data.release_date).getFullYear()}</S.CardText>
      </S.RowWrapper>
    </S.CardContainer>
  )
}