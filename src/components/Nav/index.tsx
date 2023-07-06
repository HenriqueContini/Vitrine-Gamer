import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import * as S from './styles'

export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleMenu = () => {
    setShowMenu(showMenu ? false : true)
  }
  
  return (
    <>
      <S.NavContainer className={showMenu ? 'active' : ''}>
        <S.CloseIcon onClick={() => handleMenu()}>
          <AiOutlineClose />
        </S.CloseIcon>

        <S.NavLink href="#"><p>Início</p></S.NavLink>
        <S.NavLink href="#"><p>Favoritos</p></S.NavLink>
        <S.NavLink href="#"><p>Perfil</p></S.NavLink>
      </S.NavContainer>

      <S.MenuIcon onClick={() => handleMenu()}>
        <AiOutlineMenu />
      </S.MenuIcon>
    </>
  )
}
