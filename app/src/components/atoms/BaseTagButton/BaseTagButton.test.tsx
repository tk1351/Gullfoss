import React from 'react'
import { render, screen } from '@testing-library/react'
import BaseTagButton from './BaseTagButton'

describe('BaseTagButton', () => {
  it('buttonが正しく表示されている', () => {
    render(<BaseTagButton label={'Label'} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('propsとして渡ってくるlabelが正しく表示されている', () => {
    render(<BaseTagButton label={'Label'} />)
    expect(screen.getByRole('button', { name: 'Label' })).toBeInTheDocument()
  })
})
