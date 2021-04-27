import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LanguageDropdown from '.'

describe('<LanguageDropdown />', () => {
  beforeEach(() => {
    renderWithTheme(<LanguageDropdown />)
  })

  it('should render title', () => {
    expect(screen.getByText(/EN/)).toBeInTheDocument()
  })
})
