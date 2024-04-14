import { render, screen, fireEvent } from '@testing-library/react'

import MiniCart from './'

import { CartProvider } from '@/contexts/CartProvider'

// ===========================================================================

describe('<MiniCart>', () => {
  // Teste: Renderiza o botão do mini carrinho
  test('Renders mini cart button', () => {
    render(
      <CartProvider>
        <MiniCart />
      </CartProvider>
    )

    // Verifica se o ícone do carrinho está presente
    const cartIcon = screen.getByAltText(/ícone do carrinho/i)
    expect(cartIcon).toBeInTheDocument()

    // Verifica se o texto de contagem do carrinho está presente
    const cartCount = screen.queryByText(/\d+/)
    // Não deve estar presente inicialmente
    expect(cartCount).toBeNull()
  })

  // Teste: Abre o mini carrinho ao clicar no botão
  test('Opens mini cart on button click', () => {
    render(
      <CartProvider>
        <MiniCart />
      </CartProvider>
    )

    // Simula o clique no botão do carrinho
    const cartButton = screen.getByTestId('cart-button')
    fireEvent.click(cartButton)

    // Verifica se o menu do carrinho está aberto
    const miniCartMenu = screen.getByTestId('cart-dialog')
    expect(miniCartMenu).toBeInTheDocument()
  })

  // Teste: Fecha o mini carrinho com clique externo
  test('Closes mini cart on outside click', () => {
    render(
      <CartProvider>
        <MiniCart />
      </CartProvider>
    )

    // Simula a abertura do menu do carrinho
    const cartButton = screen.getByTestId('cart-button')
    fireEvent.click(cartButton)

    // Simula um clique fora do menu do carrinho
    fireEvent.mouseDown(document.body)

    // Verifica se o menu do carrinho está fechado
    const miniCartMenu = screen.queryByRole('dialog', { name: /mini cart/i })
    expect(miniCartMenu).toBeNull()
  })
})
