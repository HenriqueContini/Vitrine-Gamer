import { styled } from "styled-components";

export const Cards = styled.section`
  & .scroller {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: 600px) {
    & .scroller {

      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  @media screen and (min-width: 960px) {
    & .scroller {
      gap: 50px;
      max-width: 1400px;
    }
  }
`