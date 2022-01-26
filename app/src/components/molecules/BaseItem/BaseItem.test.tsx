import { render, screen } from '@testing-library/react'
import BaseItem from './BaseItem'

describe('BaseItem', () => {
  it('list要素が存在すること', () => {
    render(<BaseItem title={'Post Title'} date={'2022-01-01'} />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })
  it('記事のタイトルが存在すること', () => {
    render(<BaseItem title={'Post Title'} date={'2022-01-01'} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
  it('投稿の日付が存在すること', () => {
    render(<BaseItem title={'Post Title'} date={'2022-01-01'} />)
    expect(screen.getByLabelText('post-date')).toBeInTheDocument()
  })
  it('正しいclassが付与されていること', () => {
    render(<BaseItem title={'Post Title'} date={'2022-01-01'} />)
    expect(screen.getByRole('listitem')).toHaveClass('item')
  })
})
