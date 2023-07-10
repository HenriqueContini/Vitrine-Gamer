import * as S from './styles'

interface ModalErrorProps {
  onClick: () => void
  msg: string
}

export default function ModalError({onClick, msg}: ModalErrorProps) {
  return (
    <S.ModalContainer>
      <S.ModalMsg>{msg}</S.ModalMsg>
      <S.ModalButton type='button' onClick={() => {onClick()}}>Entendi!</S.ModalButton>
    </S.ModalContainer>
  )
}
