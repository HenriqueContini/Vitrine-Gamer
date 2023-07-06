import { TailSpin } from 'react-loader-spinner'
import * as S from './styles'

export default function Loader() {
  return (
    <S.LoaderContainer>
      <TailSpin color='#068FFF' wrapperClass="loader"/>
      <S.LoaderTitle>Carregando dados...</S.LoaderTitle>
    </S.LoaderContainer>
  )
}
