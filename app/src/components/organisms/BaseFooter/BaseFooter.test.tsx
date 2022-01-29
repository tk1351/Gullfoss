import { render, screen } from '@testing-library/react'
import BaseFooter from './BaseFooter'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const setup = () => {
  const utils = render(<BaseFooter links={[{ icon: faTwitter, href: '#' }]} />)
  const footer = utils.getByRole('contentinfo')
  const footerTitle = utils.getByLabelText('footer-title')
  const list = utils.getByRole('list')
  return {
    ...utils,
    footer,
    footerTitle,
    list,
  }
}

describe('BaseFooter', () => {
  it('footerタグが存在すること', () => {
    const { footer } = setup()
    expect(footer).toBeInTheDocument()
  })
  it('pタグが存在すること', () => {
    const { footerTitle } = setup()
    expect(footerTitle).toBeInTheDocument()
  })
  it('ulタグが存在すること', () => {
    const { list } = setup()
    expect(list).toBeInTheDocument()
  })
  it('liタグが存在すること', () => {
    setup()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })
  it('aタグが存在すること', () => {
    setup()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })
  it('正しくclassが付与されていること', () => {
    const { footer, footerTitle, list } = setup()
    expect(footer).toHaveClass('footer')
    expect(footerTitle).toHaveClass('title')
    expect(list).toHaveClass('linksWrapper')
  })
})
