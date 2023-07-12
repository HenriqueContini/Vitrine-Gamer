import { Link } from 'react-router-dom'
import * as S from './styles'

export default function Page404() {
  return (
    <S.Main>
      <S.Title>Game over</S.Title>
      <S.Error404>404</S.Error404>
      <S.Text>Página não encontrada!</S.Text>
      <S.LinkWrapper>
        <Link to={'/'}>Início</Link>
      </S.LinkWrapper>
    </S.Main>
  )
}
