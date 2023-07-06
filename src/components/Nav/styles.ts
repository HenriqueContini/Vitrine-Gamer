import { styled } from "styled-components";

export const NavContainer = styled.nav`
  padding: 22px;
  display: none;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  background-color: #343A40;
  gap: 20px;
  height: 100vh;
  min-width: 200px;

  &.active {
    display: flex;
  }

  @media screen and (min-width: 600px) {
    padding: 0;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    gap: 30px;
    background-color: transparent;
  }
`

export const CloseIcon = styled.div`
  display: flex;
  justify-content: right;
  font-size: 2rem;
  color: var(--white);
  cursor: pointer;
  margin-bottom: 40px;

  transition: .5s;

  &:hover {
    color: var(--main-color);
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: var(--white);
  padding: 5px;
  text-align: center;
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: transparent;
  
  transition: .5s;

  &:hover {
    color: var(--main-color);
    border-color: var(--main-color);
  }
`

export const MenuIcon = styled.div`
  display: flex;
  font-size: 1.75rem;
  color: var(--white);
  cursor: pointer;

  transition: .5s;

  &:hover {
    color: var(--main-color);
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`