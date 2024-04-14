import { render } from '@testing-library/react'

import ProductPrice from './'

// ===========================================================================

describe('ProductPrice component', () => {
  // Teste: Renderiza o preço formatado da forma correta
  test('Renders formatted price correctly', () => {
    const price = '10000'
    const { getByText } = render(<ProductPrice price={price} />)
    expect(getByText('R$ 10.000')).toBeInTheDocument()
  })
})
