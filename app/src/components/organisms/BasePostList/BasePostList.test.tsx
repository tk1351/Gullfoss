import { render, screen } from '@testing-library/react'
import BasePostList from './BasePostList'
import { mockItems } from '../../../lib'

const setup = () => {
  const utils = render(<BasePostList items={mockItems} />)
  const list = utils.getByRole('list')
  const listItem = utils.getAllByRole('listitem')
  const article = utils.getAllByRole('article')
  return {
    ...utils,
    list,
    listItem,
    article,
  }
}

describe('BasePostList', () => {
  it('ulタグが存在する', () => {
    const { list } = setup()
    expect(list).toBeInTheDocument()
  })
  it('liタグが存在する', () => {
    const { listItem } = setup()
    expect(listItem).toHaveLength(mockItems.contents.length)
  })
  it('articleタグが存在する', () => {
    const { article } = setup()
    expect(article).toHaveLength(mockItems.contents.length)
  })
  it('正しくclassが付与されていること', () => {
    const { list } = setup()
    expect(list).toHaveClass('articleList')
  })
})
