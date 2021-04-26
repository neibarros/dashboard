import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading with the correct size', () => {
    renderWithTheme(<Heading>Dashboard</Heading>)
    expect(screen.getByRole('heading', { name: /dashboard/i })).toHaveStyle({
      'font-size': '2.4rem'
    })
  })

  it('should render the heading with the correct color', () => {
    renderWithTheme(<Heading>Dashboard</Heading>)
    expect(screen.getByRole('heading', { name: /dashboard/i })).toHaveStyle({
      color: '#14131d'
    })
  })
})
