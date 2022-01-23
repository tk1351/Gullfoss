import React from 'react'
import { render, screen } from '@testing-library/react'
import BaseTagButton from './BaseTagButton'

describe('BaseTagButton', () => {
  it('labelが正しく表示されている', () => {
    render(<BaseTagButton label={'Label'} />)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })
})
