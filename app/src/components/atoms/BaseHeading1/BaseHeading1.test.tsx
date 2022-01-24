import { render, screen } from '@testing-library/react'
import BaseHeading1 from './BaseHeading1'

const setup = () => {
  const utils = render(<BaseHeading1 text={'Text'} />)
  const head1 = utils.getByRole('heading')
  return {
    ...utils,
    head1,
  }
}

describe('BaseHeading1', () => {
  it('h1が存在する', () => {
    const { head1 } = setup()
    expect(head1).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    setup()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    const { head1 } = setup()
    expect(head1).toHaveClass('heading')
  })
})
