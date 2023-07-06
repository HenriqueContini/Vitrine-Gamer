import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: var(--light-background);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 600px){
    padding: 20px 50px;
  }
`

export const LogoImg = styled.img`
  max-width: 200px;
`