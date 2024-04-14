import { render } from '@testing-library/react'

import ProductCard from './'

import { productData } from '@/@mocks/tests'

// ===========================================================================

describe('ProductCard component', () => {
  // Teste: Renderiza o card de produto com os dados corretos
  test('Renders product card with correct data', () => {
    const { getByText, getByAltText } = render(
      <ProductCard productData={productData} />
    )
    expect(getByText('Product Name')).toBeInTheDocument()
    expect(getByText('R$ 20')).toBeInTheDocument()
    expect(getByText('Product Description')).toBeInTheDocument()
    expect(getByAltText('Imagem do produto - Product Name')).toBeInTheDocument()
  })

  // Teste: Renderiza o botão de adicionar ao carrinho
  test('Renders add to cart button', () => {
    const { getByTestId } = render(<ProductCard productData={productData} />)
    expect(getByTestId('add-product-to-cart')).toBeInTheDocument()
  })
})
