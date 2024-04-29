import Header from './components/Cabecalho'
import Hero from './components/Hero'
import Rodape from './components/Rodape'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
      <Rodape />
    </>
  )
}

export default App
