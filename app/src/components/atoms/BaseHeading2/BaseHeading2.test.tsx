import { render, screen } from '@testing-library/react'
import BaseHeading2 from '../BaseHeading2/BaseHeading2'

const setup = () => {
  const utils = render(<BaseHeading2 text={'Text'} />)
  const head2 = utils.getByRole('heading')
  return {
    ...utils,
    head2,
  }
}

describe('BaseHeading2', () => {
  it('h2が存在する', () => {
    const { head2 } = setup()
    expect(head2).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    setup()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    const { head2 } = setup()
    expect(head2).toHaveClass('heading')
  })
})
