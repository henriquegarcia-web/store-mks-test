import { render } from '@testing-library/react'

import ProductPrice from './'

describe('ProductPrice component', () => {
  it('Renders formatted price correctly', () => {
    const price = '10000'

    const { getByText } = render(<ProductPrice price={price} />)

    // Verifica se o preço formatado está sendo renderizado corretamente
    expect(getByText('R$ 10.000')).toBeInTheDocument()
  })
})
