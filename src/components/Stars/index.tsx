import { AiFillStar } from 'react-icons/ai'
import * as S from './styles'

interface StarsProps {
  handleStars: (nStars: number) => void
  stars: number
}

export default function Stars({handleStars, stars}: StarsProps) {
  const showStars = () => {
    let content = []
  
    for (let i = 1; i <= 5; i++) {
      content.push(<S.Star key={i} onClick={() => handleStars(i)} $star={i <= stars ? true : false}><AiFillStar /></S.Star>)
    }
  
    return content
  }

  return (
    <S.StarContainer>
      {showStars()}
    </S.StarContainer>
  )
}
