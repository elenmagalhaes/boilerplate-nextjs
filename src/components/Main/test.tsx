import { render, screen } from '@testing-library/react'
import convertHexToRGBA from '../../utils/convertHEXtoRGB'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render colors correctly', () => {
    const { container } = render(<Main />)
    screen.debug()
    expect(container.firstChild).toHaveStyle({
      backgroundColor: convertHexToRGBA('#06092b')
    })
  })
})
