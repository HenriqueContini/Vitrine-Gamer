import { styled } from "styled-components";

export const Main = styled.main<{$reverse: boolean}>`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px){
    flex-direction: ${(props) => props.$reverse ? 'row' : 'row-reverse'};
    transition: 1s;
  }
`

export const Container = styled.section<{$color: string}>`
  flex: 1;
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