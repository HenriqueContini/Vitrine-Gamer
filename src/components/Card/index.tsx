import Game from '../../interfaces/Game'
import * as S from './styles'
import {BsFillHeartbreakFill, BsFillHeartFill} from 'react-icons/bs'

interface CardProps {
  data: Game
}

export default function Card({ data }: CardProps) {
  return (
    <S.CardContainer>
      <S.RowWrapper>
        <S.CardTitle>{data.title}</S.CardTitle>
        <S.Favorite>
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