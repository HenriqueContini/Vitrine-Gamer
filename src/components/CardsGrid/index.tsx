import Game from '../../interfaces/Game'
import Card from '../Card'
import * as S from './styles'

interface CardsGridProps {
  data: Game[]
}

export default function CardsGrid({data}: CardsGridProps) {
  return (
    <S.Cards>
      {data.map(game => <Card key={game.id} title={game.title} thumbnail={game.thumbnail} genre={game.genre} />)}
    </S.Cards>
  )
}
