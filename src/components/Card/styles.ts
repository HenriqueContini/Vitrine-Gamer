import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 15px;
  padding-bottom: 10px;
  transition: .5s;
  background-color: var(--light-background);

  @media screen and (min-width: 600px) {
    max-width: 300px;
  }
`

export const CardImg = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
`

export const CardTitle = styled.h4`
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
`

export const CardGenre = styled.p`
  background-color: var(--gray);
  color: var(--white);
  text-align: center;
  padding: 5px 10px;
  align-self: center;
  border-radius: 5px;
`