import styled from 'styled-components'

export const VagaLi = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;

  h3 {
    height: 40px;
  }

  ul {
    height: 100px;
  }

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }

  &:hover a {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }

  @media (max-width: 767px) {
    ul {
      height: 130px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    ul {
      height: 130px;
    }
  }
`

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Link = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
