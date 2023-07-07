import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import * as S from './styles'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { pathname } = useLocation()

  const links: { route: string, name: string }[] = [{
    name: 'Início',
    route: '/'
  }, {
    name: 'Favoritos',
    route: '/favorites'
  }, {
    name: 'Login',
    route: '/auth'
  }]

  const handleMenu = () => {
    setShowMenu(showMenu ? false : true)
  }

  return (
    <>
      <S.NavContainer className={showMenu ? 'active' : ''}>
        <S.CloseIcon onClick={() => handleMenu()}>
          <AiOutlineClose />
        </S.CloseIcon>

        {links.map((item, index) =>
          <Link key={index} to={item.route}>
            <S.LinkText className={pathname === item.route ? 'active' : ''}>{item.name}</S.LinkText>
          </Link>
        )}

      </S.NavContainer>

      <S.MenuIcon onClick={() => handleMenu()}>
        <AiOutlineMenu />
      </S.MenuIcon>
    </>
  )
}
