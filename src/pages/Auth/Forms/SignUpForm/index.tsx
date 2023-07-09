import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from '../styles'
import { useNavigate } from 'react-router-dom';
import FormResponse from '../../../../interfaces/FormResponse';
import signUp from '../../../../services/signUp';

interface SignUpForm {
  setShowLogin: (value: boolean) => void
}

export default function SignUpForm({setShowLogin} : SignUpForm) {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  
  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')

    const result: FormResponse = await signUp(email, password)

    setEmail('')
    setPassword('')
    
    if (result.error) {
      return setErrorMsg(result.msg)
    }

    navigate('/')
  }

  return (
    <>
      <S.Title>Cadastro</S.Title>
      <S.Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleForm(e)}>
        <S.Label htmlFor='email'>Seu melhor email</S.Label>
        <S.Input id='email' type='email' placeholder='exemplo@gmail.com' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
        <S.Label htmlFor='password'>Crie uma senha</S.Label>
        <S.Input id='password' type='password' placeholder='************' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
        {errorMsg && <S.ErrorSpan>{errorMsg}</S.ErrorSpan>}

        <S.Button type='submit'>Cadastrar-se</S.Button>
      </S.Form>
      <S.Text>Já possui conta? <S.Span onClick={() => setShowLogin(true)}>Fazer login!</S.Span></S.Text>
    </>
  )
}
