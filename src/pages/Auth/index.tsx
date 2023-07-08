import * as S from './styles'
import { useState } from 'react'
import vg1 from '../../assets/videogame1.png'
import LoginForm from './Forms/LoginForm'
import SignUpForm from './Forms/SignUpForm'

export default function Auth() {
  const [showLogin, setShowLogin] = useState<boolean>(true)

  return (
    <S.Main>
      <S.Container $color='var(--light-background)'>
        <S.Wrapper>
          <S.Img src={vg1} alt='Pessoa jogando videogame' />
        </S.Wrapper>
      </S.Container>
      <S.Container $color='transparent'>
        <S.Wrapper>
          {showLogin ? <LoginForm setShowLogin={setShowLogin}/> : <SignUpForm setShowLogin={setShowLogin}/>}
        </S.Wrapper>
      </S.Container>
    </S.Main>
  )
}