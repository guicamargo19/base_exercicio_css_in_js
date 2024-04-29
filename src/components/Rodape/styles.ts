import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 60px;
  margin-top: 24px;

  a {
    color: var(--cor-principal);
    text-decoration: none;
    transition: all ease-in-out 0.2s;

    &:hover {
      transition: all ease-in-out 0.2s;
      opacity: 60%;
    }
  }
`
