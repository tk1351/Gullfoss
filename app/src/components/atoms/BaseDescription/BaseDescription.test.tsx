import { render } from '@testing-library/react'
import BaseDescription from './BaseDescription'

const setup = () => {
  const utils = render(<BaseDescription body={'Description'} />)
  const description = utils.getByLabelText('description')
  return {
    ...utils,
    description,
  }
}

describe('BaseDescription', () => {
  it('divタグが存在すること', () => {
    const { description } = setup()
    expect(description).toBeInTheDocument()
  })
  it('正しいclassが付与されていること', () => {
    const { description } = setup()
    expect(description).toHaveClass('description')
  })
})
