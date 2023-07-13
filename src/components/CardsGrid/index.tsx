import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Game from '../../interfaces/Game'
import Card from '../Card'
import * as S from './styles'
import Loader from '../Loader';
import ModalError from '../ModalError';
import SortGrid from '../SortGrid';
import useInfiniteScroll from 'react-infinite-scroll-hook';

interface CardsGridProps {
  updateData: (newGame: Game) => void
  setFilteredData: Dispatch<SetStateAction<Game[]>>
  filteredData: Game[]
}

export default function CardsGrid({ filteredData, updateData, setFilteredData }: CardsGridProps) {
  const [splittedData, setSplittedData] = useState<Game[][]>()
  const [displayData, setDisplayData] = useState<Game[]>([])
  const [currentIndexData, setCurrentIndexData] = useState<number>(0)
  const [showError, setShowError] = useState<boolean>(false)

  const [hasNextPage, setHasNextPage] = useState(false)
  const [loading] = useState(false)

  const loadMoreData = () => {
    if (splittedData) {
      let newIndex = currentIndexData + 1

      if (newIndex < splittedData.length) {
        let newData = splittedData[newIndex]
        setCurrentIndexData(newIndex)

        setDisplayData(prev => [...prev, ...newData])
      }
      setHasNextPage(currentIndexData + 1 < splittedData.length)
    }
  }

  const splitData = (len: number) => {
    let parts = [], i = 0, n = filteredData.length

    while (i < n) {
      parts.push(filteredData.slice(i, i += len))
    }

    return parts
  }

  useEffect(() => {
    setSplittedData(splitData(12))
    setCurrentIndexData(0)
  }, [filteredData])

  useEffect(() => {
    if (splittedData) {
      setDisplayData(splittedData[0])
      setHasNextPage(currentIndexData + 1 < splittedData.length)
    }
  }, [splittedData])

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMoreData,
  });

  return (
    <S.Cards>
      {displayData && splittedData &&
        <>
          <SortGrid filteredData={filteredData} setFilteredData={setFilteredData} />
          <S.Scroller $blur={showError}>
            {displayData.map(game => <Card setShowError={setShowError} key={game.id} data={game} updateData={updateData} />)}
            {(loading || hasNextPage) && (
              <div ref={sentryRef}>
                <Loader />
              </div>
            )}
          </S.Scroller>
        </>
      }

      {showError && <ModalError msg='É necessário estar logado' onClick={() => setShowError(false)} />}
    </S.Cards>
  )
}