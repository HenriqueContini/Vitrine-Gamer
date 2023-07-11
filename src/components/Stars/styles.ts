import { styled } from "styled-components"

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

export const Star = styled.div<{$star: boolean}>`
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  color: ${(props) => props.$star ? 'yellow' : 'var(--gray)'};
  cursor: pointer;

  transition: 0.5s;
  
  &:hover {
    color: var(--white);
  }
`