import {ChangeEvent, FormEvent, useState} from 'react'
import * as S from '../styles'
import { useNavigate } from 'react-router-dom';
import login from '../../../../services/login';
import FormResponse from '../../../../interfaces/FormResponse';
import { TailSpin } from 'react-loader-spinner';

interface LoginFormProps {
  setShowLogin: (value: boolean) => void
}

export default function LoginForm({setShowLogin} : LoginFormProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string | undefined>('')

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMsg('')

    const result: FormResponse = await login(email, password)

    setEmail('')
    setPassword('')
    
    setIsLoading(false)
    if (result.error) {
      return setErrorMsg(result.msg)
    }

    navigate('/')
  }

  return (
    <>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={(e: FormEvent<HTMLFormElement>) => handleForm(e)}>
        <S.Label htmlFor='email'>Seu email</S.Label>
        <S.Input id='email' type='email' placeholder='exemplo@gmail.com' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
        <S.Label htmlFor='password'>Sua senha</S.Label>
        <S.Input id='password' type='password' placeholder='************' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />
        {errorMsg && <S.ErrorSpan>{errorMsg}</S.ErrorSpan>}

        <S.Button type='submit'>{isLoading ? <TailSpin color='#FFFFFF' wrapperClass="loader"/> : 'Login'} </S.Button>
      </S.Form>
      <S.Text>Não possui conta? <S.Span onClick={() => setShowLogin(false)}>Fazer cadastro!</S.Span></S.Text>
    </>
  )
}
