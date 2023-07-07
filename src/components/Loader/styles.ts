import styled from 'styled-components'

export const LoaderContainer = styled.main`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;

  & > .loader {
    margin: auto;
  }
`

export const LoaderTitle = styled.h2`
  font-size: 1.75rem;
  color: var(--main-color);
  text-align: center;
`