import * as S from './styles'
import logo from '../../assets/logo.png'
import Nav from '../Nav'

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoImg src={logo}/>

      <Nav />
    </S.HeaderContainer>
  )
}