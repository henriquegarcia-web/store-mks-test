import { render, screen } from '@testing-library/react'

import Logo from './'

// ===========================================================================

describe('<Logo>', () => {
  // Teste: Renderiza link com texto do logotipo
  test('Renders link with logo text', () => {
    render(<Logo />)

    // Verifica se o link está presente e se possui o texto 'MKS Sistemas'
    const linkElement = screen.getByRole('link', { name: /mks sistemas/i })
    expect(linkElement).toBeInTheDocument()

    // Verifica se o texto 'MKS' está presente em negrito
    const boldTextElement = screen.getByText(/mks/i)
    expect(boldTextElement).toBeInTheDocument()
    expect(boldTextElement.tagName).toEqual('B')

    // Verifica se o texto 'Sistemas' está presente
    const paragraphTextElement = screen.getByText(/sistemas/i)
    expect(paragraphTextElement).toBeInTheDocument()
  })

  // Teste: O link aponta para o destino correto
  test('Link points to the correct destination', () => {
    render(<Logo />)

    // Verifica se o link possui o href correto
    const linkElement = screen.getByRole('link', { name: /mks sistemas/i })
    expect(linkElement).toHaveAttribute('href', '/')
  })
})
