import { render, screen } from '@testing-library/react'
import BaseSNSLink from './BaseSNSLink'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const setup = () => {
  const utils = render(<BaseSNSLink icon={faTwitter} href='#' />)
  const link = screen.getByRole('link')
  const icon = screen.getByLabelText('icon-sns')
  return {
    ...utils,
    link,
    icon,
  }
}

describe('BaseSNSLink', () => {
  it('linkが存在すること', () => {
    const { link } = setup()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#')
  })
  it('Iconが表示されている', () => {
    const { icon } = setup()
    expect(icon).toBeInTheDocument()
  })
})
