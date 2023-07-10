import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  gap: 5px;
  padding: 10px;
  transition: .5s;
  background-color: var(--light-background);

  transition: 0.3s;

  &:hover {
    box-shadow: 3px 3px 5px -1px rgba(0,0,0,0.5);
  }

  @media screen and (min-width: 600px) {
    max-width: 280px;
  }
`

export const RowWrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
`

export const CardImg = styled.img`
  border-radius: 10px;
  width: 100%;
`

export const CardTitle = styled.h4`
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
`

export const CardText = styled.p`
  color: var(--white);
  font-size: .75rem;
`

export const Favorite = styled.div<{$favorite: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${(props) => props.$favorite ? 'var(--red)' : 'var(--gray)'};
  cursor: pointer;

  transition: 0.5s;
  
  &:hover {
    color: var(--white);
  }
`

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`

export const Star = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  color: yellow;
  cursor: pointer;

  transition: 0.5s;
  
  &:hover {
    color: var(--white);
  }
`