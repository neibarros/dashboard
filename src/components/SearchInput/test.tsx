import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SearchInput from '.'

describe('<SearchInput />', () => {
  it('Renders with placeholder', () => {
    renderWithTheme(<SearchInput />)

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
