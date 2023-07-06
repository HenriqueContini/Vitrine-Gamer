import * as S from './styles'

interface CardProps {
  title: string
  thumbnail: string
  genre: string
}

export default function Card({title, thumbnail, genre}: CardProps) {
  return (
    <S.CardContainer>
      <S.CardImg src={thumbnail} alt={`Imagem ${title}`} loading='lazy'/>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardGenre>{genre}</S.CardGenre>
    </S.CardContainer>
  )
}