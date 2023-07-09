import styled from 'styled-components'

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid var(--gray);
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  height: fit-content;
`

export const SearchTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SearchTitle = styled.h3`
  font-weight: 400;
  color: var(--white);
  font-size: 1.5rem;
`

export const ClearButton = styled.div`
  font-size: 2rem;
  color: var(--gray);
  transition: .5s;
  cursor: pointer;

  &:hover {
    color: var(--red);
  }

  & > svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SearchLabel = styled.label`
  color: var(--gray);
  font-size: 1rem;
`

export const SearchInput = styled.input`
  background-color: var(--light-background);
  flex: 1;
  color: var(--white);
  font-size: 1rem;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: .5s;
  outline: none;

  &:focus {
    border-color: var(--main-color);
  }
`

export const SearchGenre = styled.select`
  background-color: var(--light-background);
  flex: 1;
  color: #848b94;
  font-size: 1rem;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: .5s;
  outline: none;
`