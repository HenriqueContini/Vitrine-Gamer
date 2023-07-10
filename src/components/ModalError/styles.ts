import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  background-color: var(--light-background);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
`

export const ModalMsg = styled.p`
  text-align: center;
  font-size: 1rem;
  color: var(--white);
`

export const ModalButton = styled.button`
  width: 100%;
  color: var(--white);
  border-radius: 10px;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  cursor: pointer;
  padding: 10px;
  font-size: 1rem;
`