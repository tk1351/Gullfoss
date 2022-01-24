import { render, screen } from '@testing-library/react'
import BaseDate from './BaseDate'

const setup = () => {
  const utils = render(<BaseDate date={'January 01, 2022'} />)
  const date = utils.getByLabelText('post-date')
  return {
    ...utils,
    date,
  }
}

describe('BaseDate', () => {
  it('pタグが存在する', () => {
    const { date } = setup()
    expect(date).toBeInTheDocument()
  })
  it('propsが正しく渡っている', () => {
    setup()
    expect(screen.getByText('January 01, 2022')).toBeInTheDocument()
  })
  it('classが正しく付与されている', () => {
    const { date } = setup()
    expect(date).toHaveClass('postDate')
  })
})
