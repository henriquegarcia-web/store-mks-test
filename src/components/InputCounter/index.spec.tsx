import { render, screen, fireEvent } from '@testing-library/react'

import InputCounter from './'

// ===========================================================================

describe('<InputCounter>', () => {
  // Teste: Renderiza quantidade inicial e botões
  test('Renders initial quantity and buttons', () => {
    const initialQuantity = 3
    const updatingCart = false
    const handleDecreaseQuantity = jest.fn()
    const handleIncreaseQuantity = jest.fn()

    render(
      <InputCounter
        initialQuantity={initialQuantity}
        updatingCart={updatingCart}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />
    )

    // Verifica se o texto da quantidade inicial está presente
    const quantityText = screen.getByText(initialQuantity.toString())
    expect(quantityText).toBeInTheDocument()

    // Verifica se os botões de diminuir e aumentar estão presentes
    const decreaseButton = screen.getByTestId('decrease-button')
    expect(decreaseButton).toBeInTheDocument()

    const increaseButton = screen.getByTestId('increase-button')
    expect(increaseButton).toBeInTheDocument()
  })

  // Teste: Desativa botões e mostra ícone de carregamento ao atualizar carrinho
  test('Disables buttons and shows loading icon when updating cart', () => {
    const initialQuantity = 3
    const updatingCart = true
    const handleDecreaseQuantity = jest.fn()
    const handleIncreaseQuantity = jest.fn()

    render(
      <InputCounter
        initialQuantity={initialQuantity}
        updatingCart={updatingCart}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />
    )

    // Verifica se os botões estão desabilitados
    const decreaseButton = screen.getByTestId('decrease-button')
    expect(decreaseButton).toBeDisabled()

    const increaseButton = screen.getByTestId('increase-button')
    expect(increaseButton).toBeDisabled()

    // Verifica se o ícone de carregamento está presente
    const loadingIcon = screen.getByTestId('loading-icon')
    expect(loadingIcon).toBeInTheDocument()
  })

  // Teste: As chamadas diminuem e aumentam as funções de quantidade quando os botões são clicados
  test('Calls decrease and increase quantity functions when buttons are clicked', () => {
    const initialQuantity = 3
    const updatingCart = false
    const handleDecreaseQuantity = jest.fn()
    const handleIncreaseQuantity = jest.fn()

    render(
      <InputCounter
        initialQuantity={initialQuantity}
        updatingCart={updatingCart}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
      />
    )

    // Simula o clique no botão de diminuir
    const decreaseButton = screen.getByTestId('decrease-button')
    fireEvent.click(decreaseButton)
    expect(handleDecreaseQuantity).toHaveBeenCalledTimes(1)

    // Simula o clique no botão de aumentar
    const increaseButton = screen.getByTestId('increase-button')
    fireEvent.click(increaseButton)
    expect(handleIncreaseQuantity).toHaveBeenCalledTimes(1)
  })
})
