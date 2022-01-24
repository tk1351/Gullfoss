import { render, screen } from '@testing-library/react'
import BaseHeading4 from '../BaseHeading4/BaseHeading4'

describe('BaseHeading4', () => {
  it('h4が存在する', () => {
    render(<BaseHeading4 text={'Text'} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    render(<BaseHeading4 text={'Text'} />)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    render(<BaseHeading4 text={'Text'} />)
    expect(screen.getByRole('heading')).toHaveClass('heading')
  })
})
