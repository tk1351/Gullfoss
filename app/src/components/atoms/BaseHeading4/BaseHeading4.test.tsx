import { render, screen } from '@testing-library/react'
import BaseHeading4 from '../BaseHeading4/BaseHeading4'

const setup = () => {
  const utils = render(<BaseHeading4 text={'Text'} />)
  const head4 = utils.getByRole('heading')
  return {
    ...utils,
    head4,
  }
}

describe('BaseHeading4', () => {
  it('h4が存在する', () => {
    const { head4 } = setup()
    expect(head4).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    setup()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    const { head4 } = setup()
    expect(head4).toHaveClass('heading')
  })
})
