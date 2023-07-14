import { styled } from "styled-components";

export const Cards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Scroller = styled.div<{ $blur: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  filter: ${(props) => props.$blur ? 'blur(15px)' : 'none'};

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (min-width: 960px) {
    gap: 30px;
    max-width: 1400px;
  }
`