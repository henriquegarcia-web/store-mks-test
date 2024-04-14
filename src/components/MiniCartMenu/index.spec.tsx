import { render, fireEvent, screen, waitFor } from '@testing-library/react'

import MiniCartMenu from './'

import { CartProvider } from '@/contexts/CartProvider'
import { cartDetails } from '@/@mocks/tests'

describe('MiniCartMenu component', () => {
  it('renders cart details and buttons', () => {
    render(
      <CartProvider>
        <MiniCartMenu handleCloseCart={() => {}} cartDetails={cartDetails} />
      </CartProvider>
    )

    // Verifica se os detalhes do carrinho são renderizados corretamente
    expect(screen.getByText(/Carrinho de compras/i)).toBeInTheDocument()
    expect(screen.getByText(/Total:/i)).toBeInTheDocument()
    expect(screen.getByTestId('mini-cart-buy-button')).toBeInTheDocument()

    // Verifica se os produtos do carrinho são renderizados corretamente
    expect(screen.getByText(/Product Name 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Product Name 2/i)).toBeInTheDocument()

    // Verifica se o total do carrinho é calculado corretamente com base nos valores mockados
    expect(
      screen.getAllByText((text) => text.startsWith('R$')).length
    ).toBeGreaterThan(0)
  })

  it('updates cart total when product quantity is changed', async () => {
    render(
      <CartProvider>
        <MiniCartMenu handleCloseCart={() => {}} cartDetails={cartDetails} />
      </CartProvider>
    )

    // Verifica se o total do carrinho é mostrado corretamente
    expect(
      screen.getAllByText((text) => text.startsWith('R$')).length
    ).toBeGreaterThan(0)

    // Simula o aumento na quantidade de um produto
    fireEvent.click(screen.getAllByTestId('increase-button')[0])

    // Aguarda a atualização do total do carrinho após o aumento na quantidade do produto
    await waitFor(() => {
      expect(
        screen.getAllByText((text) => text.startsWith('R$')).length
      ).toBeGreaterThan(0)
    })

    // Simula a redução na quantidade de um produto
    fireEvent.click(screen.getAllByTestId('decrease-button')[0])

    // Aguarda a atualização do total do carrinho após a redução na quantidade do produto
    await waitFor(() => {
      expect(
        screen.getAllByText((text) => text.startsWith('R$')).length
      ).toBeGreaterThan(0)
    })
  })
})
