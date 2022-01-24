import { render, screen } from '@testing-library/react'
import BaseHeading2 from '../BaseHeading2/BaseHeading2'

describe('BaseHeading2', () => {
  it('h2が存在する', () => {
    render(<BaseHeading2 text={'Text'} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    render(<BaseHeading2 text={'Text'} />)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    render(<BaseHeading2 text={'Text'} />)
    expect(screen.getByRole('heading')).toHaveClass('heading')
  })
})
