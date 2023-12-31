import styled, { keyframes } from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 30px;
  border: 10px solid var(--main-color);
  min-height: 100vh;
`

const ani = keyframes`
  25% {
    transform: skewX(20deg);
  }
  50% {
    transform: skewX(0deg);
  }
  75% {
    transform: skewX(-20deg);
  }
`

export const Title = styled.h1`
  font-size: 2.75rem;
  color: var(--main-color);
  animation: ${ani} 4s linear infinite;
  text-align: center;
  text-transform: uppercase;
`

export const Error404 = styled.h2`
  font-size: 3rem;
  color: var(--white);
  text-align: center;
`

export const Text = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  text-align: center;
`

export const LinkWrapper = styled.div`
  margin-inline: auto;

  & > a {
    display: block;
    font-size: 1.25rem;
    padding: 10px 30px;
    border-radius: 10px;
    border: 1px solid var(--main-color);
    max-width: 200px;
    color: var(--white);
    text-decoration: none;
    cursor: pointer;

    transition: 0.3s;
  }

  & > a:hover {
    background-color: var(--main-color);
  }
`