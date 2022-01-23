import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BaseSelect from './BaseSelect'

const mockOptions = ['option1', 'option2']

const setup = () => {
  const utils = render(<BaseSelect options={mockOptions} />)
  const select = screen.getByLabelText('select')
  const option1 = screen.getByLabelText(mockOptions[0])
  const option2 = screen.getByLabelText(mockOptions[1])
  return {
    ...utils,
    select,
    option1,
    option2,
  }
}

describe('BaseSelect', () => {
  it('selectとoptionが存在する', () => {
    const { select, option1, option2 } = setup()
    expect(select).toBeInTheDocument()
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })
  it('selectをclickすると複数のoptionが表示される', () => {
    const { select, option1, option2 } = setup()
    userEvent.click(screen.getByLabelText('select'))
    expect(select).toBeInTheDocument()
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
  })
})
