import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
  align-items: center;

  @media screen and (min-width: 1080px) {
    padding: 80px;
    gap: 60px;
  }
`