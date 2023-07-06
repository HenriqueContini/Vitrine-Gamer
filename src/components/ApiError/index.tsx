import * as S from './styles'

interface ApiErrorProps {
  errorMessage: string
  handleError: () => void
}

export default function ApiError({errorMessage, handleError}: ApiErrorProps) {
  return (
    <S.ErrorContainer>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      <S.ErrorText>Ou, clique no botão abaixo:</S.ErrorText>
      <S.ErrorButton onClick={handleError}>Recarregar</S.ErrorButton>
    </S.ErrorContainer>
  )
}
