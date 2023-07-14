import styled from 'styled-components'

export const FavoriteContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  padding: 20px 10px;
  align-items: center;

  @media screen and (min-width: 1000px){
    display: grid;
    padding: 40px 20px;
    grid-template-columns: 1fr 250px;
    align-items: normal;
  }
`

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

export const NoDataText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--white);

  & > a {
    color: var(--main-color);
    cursor: pointer;
    text-decoration: none;
    
    transition: 0.3s;
  }

  & > a:hover {
    text-decoration-line: underline;
  }
`