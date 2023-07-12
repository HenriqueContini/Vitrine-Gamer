import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  padding: 20px 10px;
  align-items: center;
  
  @media screen and (min-width: 1000px){
    display: grid;
    padding: 40px 20px;
    grid-template-columns: 1fr 250px;
    align-items: normal;
  }
`