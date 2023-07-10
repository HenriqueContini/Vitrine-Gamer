import { Dispatch, SetStateAction, useState } from 'react'
import Game from '../../interfaces/Game'
import { addFavorite } from '../../services/favorite'
import * as S from './styles'
import { checkUser } from '../../services/user'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'

interface CardProps {
  data: Game
  setShowError: Dispatch<SetStateAction<boolean>>
}

export default function Card({ data, setShowError }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isFavorite ? true : false)

  const handleFavorite = async () => {
    let user = await checkUser()

    if (!user) {
      setShowError(true)
    }

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
          <AiFillHeart />
        </S.Favorite>
      </S.RowWrapper>
      <S.CardImg src={data.thumbnail} alt={`Imagem ${data.title}`} loading='lazy' />
      <S.RowWrapper>
        <S.CardText>{data.genre} - {new Date(data.release_date).getFullYear()}</S.CardText>
        <S.StarContainer>
          <S.Star><AiFillStar /></S.Star>
          <S.Star><AiFillStar /></S.Star>
          <S.Star><AiFillStar /></S.Star>
          <S.Star><AiFillStar /></S.Star>
          <S.Star><AiFillStar /></S.Star>
        </S.StarContainer>
      </S.RowWrapper>
    </S.CardContainer>
  )
}