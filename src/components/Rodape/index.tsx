import { Footer } from './styles'

const Rodape = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }
  return (
    <Footer>
      <p>
        {getYear()}- &copy;
        <a href="https://portfolio-pink-omega-63.vercel.app/">
          <strong> Portfólio Guilherme Camargo</strong>
        </a>{' '}
        - Todos os direitos reservados
      </p>
    </Footer>
  )
}

export default Rodape
