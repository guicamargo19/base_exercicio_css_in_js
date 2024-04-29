import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  div {
    position: relative;
    color: #eee;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    height: auto;
    padding: 24px 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: auto;
    padding: 48px 0;
  }
`

export const Title = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 767px) {
    font-size: 24px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 36px;
  }
`
