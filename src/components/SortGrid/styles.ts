import { styled } from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`

export const OrderLine = styled.div`
  align-self: center;
  width: 1100%;
  height: 1px;
  border-top: 1px solid var(--gray);
  flex: 1;
`

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const StarIcon = styled.div<{ $active: boolean}>`
  display: flex;
  font-size: 1.25rem;
  color: ${(props) => props.$active ? 'yellow' : 'var(--gray)'};
  padding: 5px;
`

export const ArrowIcon = styled.div<{ $active: boolean}>`
  color: ${(props) => props.$active ? 'var(--main-color)' : 'var(--gray)'};
  font-size: 1.25rem;
  display: flex;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  transition: 0.3s;

  &:hover {
    background-color: var(--light-background);
    color: var(--white);
  }
`