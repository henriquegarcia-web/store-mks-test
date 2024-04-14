import { render, fireEvent, waitFor } from '@testing-library/react'

import AddProductToCart from './'

import { productData } from '@/@mocks/tests'

jest.mock('../../contexts/CartProvider.tsx', () => ({
  useCart: jest.fn(() => ({
    handleAddProductToCart: jest.fn()
  }))
}))

// ===========================================================================

describe('<AddProductToCart>', () => {
  // Teste: Lida com a adição de produtos ao carrinho corretamente
  test('Handles product addition to cart correctly', async () => {
    const { getByTestId } = render(
      <AddProductToCart productData={productData} />
    )

    const buyButton = getByTestId('button')

    fireEvent.click(buyButton)

    // Aguarda até que a operação de adicionar produto ao carrinho seja concluída
    await waitFor(() => {
      // Verifica se o botão volta a estar ativado após a conclusão da operação
      expect(buyButton).not.toHaveAttribute('disabled')
    })
  })
})
