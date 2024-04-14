import { render, fireEvent, waitFor } from '@testing-library/react'

import AddProductToCart from './'

import { productData } from '@/@mocks/tests'

// Mock do hook useCart
jest.mock('../../contexts/CartProvider.tsx', () => ({
  useCart: jest.fn(() => ({
    handleAddProductToCart: jest.fn()
  }))
}))

test('Handles product addition to cart correctly', async () => {
  // Renderiza o componente
  const { getByTestId } = render(<AddProductToCart productData={productData} />)

  // Seleciona o botão de compra
  const buyButton = getByTestId('button')

  // Simula o clique no botão de compra
  fireEvent.click(buyButton)

  // Aguarda até que a operação de adicionar produto ao carrinho seja concluída
  await waitFor(() => {
    expect(buyButton).not.toHaveAttribute('disabled') // Verifica se o botão volta a estar ativado após a conclusão da operação
  })
})
