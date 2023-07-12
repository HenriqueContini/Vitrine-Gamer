import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Game from '../../interfaces/Game'
import Card from '../Card'
import * as S from './styles'
import Loader from '../Loader';
import ModalError from '../ModalError';
import SortGrid from '../SortGrid';

interface CardsGridProps {
  updateData: (newGame: Game) => void
  setFilteredData: Dispatch<SetStateAction<Game[]>>
  filteredData: Game[]
}

export default function CardsGrid({ filteredData, updateData, setFilteredData }: CardsGridProps) {
  const [splittedData, setSplittedData] = useState<Game[][]>()
  const [displayData, setDisplayData] = useState<Game[]>([])
  const [currentData, setCurrentData] = useState<number>(0)
  const [showError, setShowError] = useState<boolean>(false)

  const splitData = (len: number) => {
    let parts = [], i = 0, n = filteredData.length

    while (i < n) {
      parts.push(filteredData.slice(i, i += len))
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
    console.log(filteredData.length)
    setSplittedData(splitData(12))
    setCurrentData(0)
  }, [filteredData])

  useEffect(() => {
    if (splittedData) {
      setDisplayData(splittedData[0])
    }
  }, [splittedData])

  return (
    <S.Cards $blur={showError}>
      {displayData && splittedData &&
        <>
          <SortGrid filteredData={filteredData} setFilteredData={setFilteredData}/>
          <InfiniteScroll className={`scroller`} loadMore={() => loadMoreData()} hasMore={currentData + 1 < splittedData.length} loader={<Loader key={0} />}>
            {displayData.map(game => <Card setShowError={setShowError} key={game.id} data={game} updateData={updateData} />)}
          </InfiniteScroll >
        </>
      }

      {showError && <ModalError msg='É necessário estar logado' onClick={() => setShowError(false)} />}
    </S.Cards>
  )
}