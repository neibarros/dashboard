import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo text', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByText(/Pay/i)).toBeInTheDocument()
  })

  it('should render the logo with the correct color', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByText(/Pay/i)).toHaveStyle({
      color: '#14131d'
    })
  })
})
