import * as S from './styles'

interface ApiErrorProps {
  errorMessage?: string
  handleError?: () => void
  showButton?: boolean
}

export default function ApiError({ errorMessage, handleError, showButton = true }: ApiErrorProps) {
  return (
    <S.ErrorContainer>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      {showButton && <>
        <S.ErrorText>Ou, clique no botão abaixo:</S.ErrorText>
        <S.ErrorButton onClick={handleError}>Recarregar</S.ErrorButton>
      </>}
    </S.ErrorContainer>
  )
}
