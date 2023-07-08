import * as S from '../styles'

interface LoginFormProps {
  setShowLogin: (value: boolean) => void
}

export default function LoginForm({setShowLogin} : LoginFormProps) {
  return (
    <>
      <S.Title>Login</S.Title>
      <S.Form>
        <S.Label htmlFor='email'>Seu email</S.Label>
        <S.Input id='email' type='email' placeholder='exemplo@gmail.com' required />
        <S.Label htmlFor='password'>Sua senha</S.Label>
        <S.Input id='password' type='password' placeholder='************' required />

        <S.Button>Login</S.Button>
      </S.Form>
      <S.Text>Não possui conta? <S.Span onClick={() => setShowLogin(false)}>Fazer cadastro!</S.Span></S.Text>
    </>
  )
}
