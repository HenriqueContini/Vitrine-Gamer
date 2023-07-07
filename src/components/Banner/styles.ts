import styled from 'styled-components'

export const BannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--light-background);
  border-radius: 15px;
  max-width: 400px;

  @media screen and (min-width: 600px){
    flex-direction: row;
    max-width: 700px;
  }
`

export const BannerImg = styled.img`
  max-width: 100%;
  border-radius: 15px 15px 0 0;

  @media screen and (min-width: 600px) {
    border-radius: 15px 0 0 15px;
  }
`

export const BannerArticle = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  color: var(--white);

  @media screen and (min-width: 600px) {
    justify-content: space-around;
  }
`

export const BannerTitle = styled.h2`
  font-weight: 400;
  color: var(--white);
  text-align: center;
`

export const BannerText = styled.p`
  font-weight: 300;
  color: var(--white);
  text-align: center;
`