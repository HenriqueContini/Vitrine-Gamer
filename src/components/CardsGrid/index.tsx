import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Game from '../../interfaces/Game'
import Card from '../Card'
import * as S from './styles'
import Loader from '../Loader';

interface CardsGridProps {
  data: Game[]
}

export default function CardsGrid({ data }: CardsGridProps) {
  const [splittedData, setSplittedData] = useState<Game[][]>()
  const [displayData, setDisplayData] = useState<Game[]>([])
  const [currentData, setCurrentData] = useState<number>(0)

  const splitData = (len: number) => {
    let parts = [], i = 0, n = data.length

    while (i < n) {
      parts.push(data.slice(i, i += len))
    }

    return parts
  }

  const loadMoreData = () => {
    if (splittedData) {
      let newIndex = currentData + 1

      if (newIndex < splittedData.length) {
        let newData = splittedData[newIndex]
        setCurrentData(newIndex)

        setDisplayData(prev => [...prev, ...newData])
      }
    }
  }

  useEffect(() => {
    setSplittedData(splitData(12))
    setCurrentData(0)
  }, [data])

  useEffect(() => {
    if (splittedData) {
      setDisplayData(splittedData[0])
    }
  }, [splittedData])

  return (
    <S.Cards>
      {displayData &&
        <InfiniteScroll className='scroller' loadMore={() => loadMoreData()} hasMore={splittedData && currentData < splittedData.length} loader={<Loader key={0}/>}>
          {displayData.map(game => <Card key={game.id} title={game.title} thumbnail={game.thumbnail} genre={game.genre} />)}
        </InfiniteScroll >
      }
    </S.Cards>
  )
}