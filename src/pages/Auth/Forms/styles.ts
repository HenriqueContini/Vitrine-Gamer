import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: var(--white);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: auto;
  width: 100%;
`

export const Label = styled.label`
  font-size: 1rem;
  color: var(--white);
`

export const Input = styled.input`
  background-color: transparent;
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 10px;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: var(--main-color);
  }
`

export const ErrorSpan = styled.span`
  color: var(--red);
  font-size: 1rem;
  text-align: center;
`

export const Button = styled.button`
  background-color: var(--tranparent);
  border: 1px solid var(--main-color);
  font-size: 1rem;
  padding: 10px;
  border-radius: 10px;
  color: var(--main-color);
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: var(--main-color);
    color: var(--white);
  }

  & > .loader {
    display: flex;
    max-width: 20px;
    max-height: 20px;
    margin-inline: auto;
    align-items: center;
  }
`

export const Text = styled.p`
  color: var(--white);
  font-size: 1rem;
  text-align: center;
`

export const Span = styled.span`
  color: var(--main-color);
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  
  transition: 0.3s;
  
  &:hover {
    text-decoration-line: underline;
  }
`