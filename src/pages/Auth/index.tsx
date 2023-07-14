import * as S from './styles'
import { useState, useEffect } from 'react'
import vg1 from '../../assets/videogame1.png'
import LoginForm from './Forms/LoginForm'
import SignUpForm from './Forms/SignUpForm'
import { logout } from '../../services/user'

export default function Auth() {
  const [showLogin, setShowLogin] = useState<boolean>(true)

  const clearUser = async () => {
    await logout()
  }

  useEffect(() => {
    clearUser()
  }, [])

  return (
    <S.Main $reverse={showLogin}>
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