import { render, screen } from '@testing-library/react'
import BasePostList from './BasePostList'

const mockItems = [
  { title: 'Learn Angular', date: '2022-01-01' },
  { title: 'Learn React', date: '2022-01-02' },
  { title: 'Learn Vue', date: '2022-01-03' },
  { title: 'Learn Svelte', date: '2022-01-04' },
]

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
    expect(listItem).toHaveLength(mockItems.length)
  })
  it('articleタグが存在する', () => {
    const { article } = setup()
    expect(article).toHaveLength(mockItems.length)
  })
  it('正しくpropsが渡っていること', () => {
    setup()
    expect(screen.getByText('Learn Angular')).toBeInTheDocument()
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Learn Vue')).toBeInTheDocument()
    expect(screen.getByText('Learn Svelte')).toBeInTheDocument()
    expect(screen.getByText('2022-01-01')).toBeInTheDocument()
    expect(screen.getByText('2022-01-02')).toBeInTheDocument()
    expect(screen.getByText('2022-01-03')).toBeInTheDocument()
    expect(screen.getByText('2022-01-04')).toBeInTheDocument()
  })
  it('正しくclassが付与されていること', () => {
    const { list } = setup()
    expect(list).toHaveClass('articleList')
  })
})
