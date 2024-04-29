import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  margin-top: 40px;

  @media (max-width: 767px) {
    display: block;
  }
`

export const ButtonPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: var(--cor-secundaria);
    border: 1px solid var(--cor-principal);
    color: var(--cor-principal);
    transition: all ease-in-out 0.2s;
  }

  @media (max-width: 767px) {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media (max-width: 767px) {
    padding: 16px;
    width: 100%;
  }
`
