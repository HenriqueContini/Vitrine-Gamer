import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Game from '../../interfaces/Game'
import { addFavorite, deleteFavorite } from '../../services/favorite'
import * as S from './styles'
import { checkUser } from '../../services/user'
import { AiFillHeart } from 'react-icons/ai'
import { addStars } from '../../services/star'
import Stars from '../Stars'
import { LazyLoadImage } from "react-lazy-load-image-component";


interface CardProps {
  data: Game
  setShowError: Dispatch<SetStateAction<boolean>>
  updateData: (newGame: Game) => void
}

export default function Card({ data, setShowError, updateData }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isFavorite ? true : false)
  const [stars, setStars] = useState<number>(data.stars ? data.stars : 0)

  const handleFavorite = async () => {
    let user = await checkUser()

    if (!user) {
      setShowError(true)
    }

    if (!isFavorite) {
      let adding = await addFavorite(data)

      if (!adding.error) {
        setIsFavorite(true)
      }
    } else {
      let deleting = await deleteFavorite(data)

      if (!deleting.error) {
        setIsFavorite(false)
      }
    }
  }

  const handleStars = async (nStars: number) => {
    let user = await checkUser()

    if (!user) {
      setShowError(true)
    }

    let adding = await addStars(data, nStars)
    if (!adding.error) {
      setStars(nStars)
    }
  }

  const handleUpdate = async () => {
    let newGame = {
      ...data,
      stars: stars,
      isFavorite: isFavorite
    }

    updateData(newGame)
  }

  useEffect(() => {
    handleUpdate()
  }, [isFavorite, stars])

  return (
    <S.CardContainer>
      <S.RowWrapper>
        <S.CardTitle>{data.title}</S.CardTitle>
        <S.Favorite $favorite={isFavorite} onClick={() => handleFavorite()}>
          <AiFillHeart />
        </S.Favorite>
      </S.RowWrapper>
      <S.CardImg>
        <LazyLoadImage src={data.thumbnail} alt={`Imagem ${data.title}`}/>
      </S.CardImg>
      <S.RowWrapper>
        <S.CardText>{data.genre} - {new Date(data.release_date).getFullYear()}</S.CardText>
        <Stars handleStars={handleStars} stars={stars} />
      </S.RowWrapper>
    </S.CardContainer>
  )
}