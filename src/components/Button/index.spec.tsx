import { render, fireEvent } from '@testing-library/react'

import Button from './'

describe('Button component', () => {
  // Renderiza o botão com o rótulo correto
  it('Renders button with correct label', () => {
    const { getByText } = render(<Button label="Click me" />)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  // Renderiza o botão com o ícone de carregamento
  it('Renders button with loading spinner', () => {
    const { getByTestId } = render(<Button label="Submit" loading={true} />)
    expect(getByTestId('button-loading-spinner')).toBeInTheDocument()
  })

  // Chama a função onClick quando o botão é clicado
  it('Calls onClick function when button is clicked', () => {
    const handleClick = jest.fn() // Cria uma função mock para simular o onClick
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    )
    fireEvent.click(getByText('Click me')) // Simula um clique no botão
    expect(handleClick).toHaveBeenCalled() // Verifica se a função mock foi chamada
  })

  // Desabilita o botão quando loading é verdadeiro
  it('Disables button when loading is true', () => {
    const { getByText } = render(<Button label="Submit" loading={true} />)
    expect(getByText('Submit')).toBeDisabled() // Verifica se o botão está desabilitado
  })

  // Desabilita o botão quando disabled é verdadeiro
  it('Disables button when disabled is true', () => {
    const { getByText } = render(<Button label="Submit" disabled={true} />)
    expect(getByText('Submit')).toBeDisabled() // Verifica se o botão está desabilitado
  })
})
