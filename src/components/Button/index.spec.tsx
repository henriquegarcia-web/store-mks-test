import { render, fireEvent } from '@testing-library/react'

import Button from './'

// ===========================================================================

describe('<Button>', () => {
  // Teste: Renderiza o botão com o rótulo correto
  test('Renders button with correct label', () => {
    const { getByText } = render(<Button label="Click me" />)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  // Teste: Renderiza o botão com o ícone de carregamento
  test('Renders button with loading spinner', () => {
    const { getByTestId } = render(<Button label="Submit" loading={true} />)
    expect(getByTestId('button-loading-spinner')).toBeInTheDocument()
  })

  // Teste: Chama a função onClick quando o botão é clicado
  test('Calls onClick function when button is clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    )
    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })

  // Teste: Desabilita o botão quando loading é verdadeiro
  test('Disables button when loading is true', () => {
    const { getByText } = render(<Button label="Submit" loading={true} />)
    expect(getByText('Submit')).toBeDisabled()
  })

  // Teste: Desabilita o botão quando disabled é verdadeiro
  test('Disables button when disabled is true', () => {
    const { getByText } = render(<Button label="Submit" disabled={true} />)
    expect(getByText('Submit')).toBeDisabled()
  })
})
