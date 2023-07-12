import * as S from './styles'
import { Dispatch, SetStateAction, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'
import Game from '../../interfaces/Game'
import { sortByAsc, sortByDesc } from '../../services/sort'

interface OrderGridProps {
  filteredData: Game[]
  setFilteredData: Dispatch<SetStateAction<Game[]>>
}

export default function SortGrid({ filteredData, setFilteredData }: OrderGridProps) {
  const [order, setOrder] = useState<boolean>(false)
  const [orderBy, setOrderBy] = useState<string>('ASC')

  const handleOrder = async () => {
    setOrderBy(prev => prev === 'ASC' ? 'DESC' : 'ASC')
    setFilteredData(orderBy === 'ASC' ? sortByAsc(filteredData) : sortByDesc(filteredData))

    if (!order) {
      return setOrder(true)
    }
  }

  return (
    <S.OrderContainer>
      <S.OrderLine></S.OrderLine>
      <S.OrderWrapper>
        <S.StarIcon $active={order}>
          <AiFillStar />
        </S.StarIcon>
        <S.ArrowIcon $active={order} onClick={handleOrder}>
          {orderBy === 'ASC' ? <HiArrowNarrowUp /> : <HiArrowNarrowDown />}
        </S.ArrowIcon>
      </S.OrderWrapper>
    </S.OrderContainer>
  )
}
