import Game from '../../interfaces/Game'
import * as S from './styles'

interface BannerProps {
  data: Game
}

export default function Banner({ data }: BannerProps) {
  return (
    <S.BannerContainer>
      <S.BannerImg src={data.thumbnail} alt={`Banner: ${data.title}`} />
      <S.BannerArticle>
        <S.BannerTitle>{data.title}</S.BannerTitle>
        <S.BannerText>{data.short_description}</S.BannerText>
      </S.BannerArticle>
    </S.BannerContainer>
  )
}