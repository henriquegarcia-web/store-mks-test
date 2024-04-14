import { render, screen, fireEvent } from '@testing-library/react'
import MiniCartCard from './'

import { productData } from '@/@mocks/tests'

describe('MiniCartCard component', () => {
  const updatingCart = false
  const handleDecreaseQuantity = jest.fn()
  const handleIncreaseQuantity = jest.fn()
  const handleDeleteCartItem = jest.fn()

  test('renders product details and buttons', () => {
    render(
      <MiniCartCard
        productData={productData}
        updatingCart={updatingCart}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDeleteCartItem={handleDeleteCartItem}
      />
    )

    // Verifica se a imagem do produto está presente
    const productImage = screen.getByAltText(
      `Image do produto ${productData.name} no carrinho`
    )
    expect(productImage).toBeInTheDocument()

    // Verifica se o nome do produto está presente
    const productName = screen.getByText(productData.name)
    expect(productName).toBeInTheDocument()

    // Verifica se o contador de quantidade está presente
    const quantityInput = screen.getByTestId('input-counter')
    expect(quantityInput).toBeInTheDocument()

    // Verifica se o botão de fechar está presente
    const closeButton = screen.getByTestId('mini-cart-cart-close')
    expect(closeButton).toBeInTheDocument()
  })

  test('calls deleteCartItem function when close button is clicked', () => {
    render(
      <MiniCartCard
        productData={productData}
        updatingCart={updatingCart}
        handleDecreaseQuantity={handleDecreaseQuantity}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDeleteCartItem={handleDeleteCartItem}
      />
    )

    // Simula o clique no botão de fechar
    const closeButton = screen.getByTestId('mini-cart-cart-close')
    fireEvent.click(closeButton)
    expect(handleDeleteCartItem).toHaveBeenCalledTimes(1)
    expect(handleDeleteCartItem).toHaveBeenCalledWith(productData)
  })
})
