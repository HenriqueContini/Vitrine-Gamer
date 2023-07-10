import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import * as S from './styles'
import { Link, useLocation } from 'react-router-dom'
import { checkUser } from '../../services/user'

export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [hasUser, setHasUser] = useState<boolean>(false)
  const { pathname } = useLocation()

  const links: { route: string, name: string }[] = [{
    name: 'Início',
    route: '/'
  }, {
    name: 'Favoritos',
    route: '/favorites'
  }, {
    name: hasUser ? 'Desconectar-se' : 'Login',
    route: '/auth'
  }]

  const handleMenu = () => {
    setShowMenu(showMenu ? false : true)
  }

  const handleUser = async () => {
    let user = await checkUser()

    if (user) {
      return setHasUser(true)
    }

    setHasUser(false)
  }

  useEffect(() => {
    handleUser()
  }, [pathname])

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
