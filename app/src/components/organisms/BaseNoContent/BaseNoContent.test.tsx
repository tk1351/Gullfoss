import { render, screen } from '@testing-library/react'
import BaseNoContent from './BaseNoContent'

describe('BaseNoContent', () => {
  it('divタグが存在すること', () => {
    render(<BaseNoContent />)
    expect(screen.getByLabelText('no-content')).toBeInTheDocument()
  })
  it('正しくclassが付与されていること', () => {
    render(<BaseNoContent />)
    expect(screen.getByLabelText('no-content')).toHaveClass('noContent')
  })
})
