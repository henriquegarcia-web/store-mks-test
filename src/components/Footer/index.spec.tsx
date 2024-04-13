// import React from 'react';
import { render, screen } from '@testing-library/react'

import Footer from './'

describe('Footer component', () => {
  test('renders footer text and link', () => {
    render(<Footer />)

    // Verifica se o texto do link está presente e se é o esperado
    const linkElement = screen.getByText(/MKS sistemas/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute(
      'href',
      'https://www.mkssistemas.com.br/'
    )

    // Verifica se o texto de direitos reservados está presente
    const rightsReservedElement = screen.getByText(
      /© Todos os direitos reservados/i
    )
    expect(rightsReservedElement).toBeInTheDocument()
  })
})
