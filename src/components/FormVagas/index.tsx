import { FormEvent, useState } from 'react'
import { ButtonPesquisar, Form, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node..."
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonPesquisar type="submit">Pesquisar</ButtonPesquisar>
    </Form>
  )
}
export default FormVagas
