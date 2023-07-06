import * as S from './styles'

interface BannerProps {
  title: string
  thumbnail: string
  short_description: string
}

export default function Banner({ title, thumbnail, short_description }: BannerProps) {
  return (
    <S.BannerContainer>
      <S.BannerImg src={thumbnail} alt={`Banner: ${title}`} />
      <S.BannerArticle>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.BannerText>{short_description}</S.BannerText>
      </S.BannerArticle>
    </S.BannerContainer>
  )
}