import { render, screen } from '@testing-library/react'
import BaseHeading1 from './BaseHeading1'

describe('BaseHeading1', () => {
  it('h1が存在する', () => {
    render(<BaseHeading1 text={'Text'} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    render(<BaseHeading1 text={'Text'} />)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    render(<BaseHeading1 text={'Text'} />)
    expect(screen.getByRole('heading')).toHaveClass('heading')
  })
})
