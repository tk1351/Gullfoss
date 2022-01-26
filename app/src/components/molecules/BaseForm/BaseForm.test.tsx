import { render, screen } from '@testing-library/react'
import BaseForm from './BaseForm'
import userEvent from '@testing-library/user-event'
import { act, renderHook } from '@testing-library/react-hooks'
import { useInput } from '../../../hooks/useInput'

describe('BaseForm', () => {
  it('formタグが存在すること', () => {
    render(<BaseForm />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
  it('inputタグが存在すること', () => {
    render(<BaseForm />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('formに文字を正しく入力できること', () => {
    render(<BaseForm />)
    userEvent.type(screen.getByRole('textbox'), 'query')
    expect(screen.getByRole('textbox')).toHaveValue('query')
  })
  it('formに文字を入力しenterを押すとsubmit関数が走る', () => {
    const mockOnSubmit = jest.spyOn(console, 'log')
    render(<BaseForm />)

    userEvent.type(screen.getByRole('textbox'), '{enter}')
    expect(mockOnSubmit).not.toHaveBeenCalled()

    userEvent.type(screen.getByRole('textbox'), 'submit')
    userEvent.type(screen.getByRole('textbox'), '{enter}')
    expect(mockOnSubmit).toHaveBeenCalled()
  })
  //TODO useStateの値の初期化を調査
  // it('formに文字が入力されていない場合はsubmit関数が走らない', () => {
  //   const mockOnSubmit = jest.spyOn(console, 'log')
  //   render(<BaseForm />)
  //   userEvent.type(screen.getByRole('textbox'), '')
  //   userEvent.type(screen.getByRole('textbox'), '{enter}')
  //   expect(mockOnSubmit).not.toHaveBeenCalled()
  // })
})
