import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
  }
`

export const Container = styled.section<{$color: string}>`
  background-color: ${(props) => props.$color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  
  @media screen and (min-width: 600px){
    min-height: 100vh;
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export const Img = styled.img`
  width: 100%;
  max-width: 400px;
`