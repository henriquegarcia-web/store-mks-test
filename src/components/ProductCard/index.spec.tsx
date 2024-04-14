import { render } from '@testing-library/react'

import ProductCard from './'

import { productData } from '@/@mocks/tests'

describe('ProductCard component', () => {
  // Teste: Renderiza o card de produto com os dados corretos
  it('Renders product card with correct data', () => {
    const { getByText, getByAltText } = render(
      <ProductCard productData={productData} />
    )
    expect(getByText('Product Name')).toBeInTheDocument() // Verifica se o nome do produto está presente
    expect(getByText('R$ 20')).toBeInTheDocument() // Verifica se o preço do produto está presente
    expect(getByText('Product Description')).toBeInTheDocument() // Verifica se a descrição do produto está presente
    expect(getByAltText('Imagem do produto - Product Name')).toBeInTheDocument() // Verifica se a imagem do produto está presente com o atributo alt correto
  })

  // Teste: Renderiza o botão de adicionar ao carrinho
  it('Renders add to cart button', () => {
    const { getByTestId } = render(<ProductCard productData={productData} />)
    expect(getByTestId('add-product-to-cart')).toBeInTheDocument() // Verifica se o botão "Add to Cart" está presente
  })
})
