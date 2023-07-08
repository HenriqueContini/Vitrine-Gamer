import * as S from '../styles'

interface SingUpFormProps {
  setShowLogin: (value: boolean) => void
}

export default function SignUpForm({setShowLogin} : SingUpFormProps) {
  return (
    <>
      <S.Title>Cadastro</S.Title>
      <S.Form>
        <S.Label htmlFor='user'>Seu usuário</S.Label>
        <S.Input id='user' type='text' placeholder='nome' required />
        <S.Label htmlFor='email'>Seu melhor email</S.Label>
        <S.Input id='email' type='email' placeholder='exemplo@gmail.com' required />
        <S.Label htmlFor='password'>Crie uma senha</S.Label>
        <S.Input id='password' type='password' placeholder='************' required />

        <S.Button>Cadastrar-se</S.Button>
      </S.Form>
      <S.Text>Já possui conta? <S.Span onClick={() => setShowLogin(true)}>Fazer login!</S.Span></S.Text>
    </>
  )
}
