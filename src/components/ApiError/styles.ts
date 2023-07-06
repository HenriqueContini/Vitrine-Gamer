import { styled } from "styled-components";

export const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 500px;
  margin: 80px auto 0 auto;
`

export const ErrorMessage = styled.h1`
  font-size: 1.75rem;
  color: var(--white);
  font-weight: 400;
  text-align: center;
`

export const ErrorText = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--white);
`

export const ErrorButton = styled.button`
  margin-top: 40px;
  font-size: 1.25rem;
  padding: 10px;
  background-color: var(--main-color);
  color: var(--background);
  border-radius: 15px;
  cursor: pointer;

  transition: .5s;

  &:hover {
    color: var(--white);
  }
`