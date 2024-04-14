import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import MiniCartMenu from './'

import { cartProducts } from '@/@mocks/tests'

import { CartProvider } from '@/contexts/CartProvider'

describe('MiniCartMenu component', () => {
  const handleCloseCart = jest.fn()
  const cartDetails = {
    cartProducts: cartProducts,
    cartTotalCount: 10,
    cartTotalPrice: 3500
  }

  test('renders cart details and buttons', () => {
    render(
      <CartProvider>
        <MiniCartMenu
          handleCloseCart={handleCloseCart}
          cartDetails={cartDetails}
        />
      </CartProvider>
    )

    // Verifica se o título do carrinho está presente
    const cartTitle = screen.getByText(/carrinho de compras/i)
    expect(cartTitle).toBeInTheDocument()

    // Verifica se os botões de fechar estão presentes
    const closeButton = screen.getByTestId('mini-cart-close')
    expect(closeButton).toBeInTheDocument()

    // Verifica se os detalhes dos produtos no carrinho estão presentes
    cartDetails.cartProducts.forEach((product) => {
      const productImage = screen.getByAltText(
        `Image do produto ${product.name} no carrinho`
      )
      expect(productImage).toBeInTheDocument()
      const productName = screen.getByText(product.name)
      expect(productName).toBeInTheDocument()
      const productQuantity = screen.getByText(product.quantity.toString())
      expect(productQuantity).toBeInTheDocument()
      const productPrice = screen.getByText(/R\$ 20/)
      expect(productPrice).toBeInTheDocument()
    })

    // Verifica se o subtotal está presente
    const subtotalLabel = screen.getByText(/total:/i)
    expect(subtotalLabel).toBeInTheDocument()
    const subtotalValue = screen.getByText(/R\$ 60/)
    expect(subtotalValue).toBeInTheDocument()

    // Verifica se o botão de finalizar compra está presente
    const checkoutButton = screen.getByTestId('mini-cart-buy-button')
    expect(checkoutButton).toBeInTheDocument()
  })

  test('calls handleCloseCart function when close button is clicked', () => {
    render(
      <CartProvider>
        <MiniCartMenu
          handleCloseCart={handleCloseCart}
          cartDetails={cartDetails}
        />
      </CartProvider>
    )

    // Simula o clique no botão de fechar
    const closeButton = screen.getByTestId('mini-cart-close')
    fireEvent.click(closeButton)
    expect(handleCloseCart).toHaveBeenCalledTimes(1)
  })

  // Adicione mais testes conforme necessário para testar outras funcionalidades do componente MiniCartMenu
})
