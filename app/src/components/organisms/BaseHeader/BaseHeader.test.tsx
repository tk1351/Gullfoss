import { render, screen } from '@testing-library/react'
import BaseHeader from './BaseHeader'

const setup = () => {
  const utils = render(<BaseHeader links={['Home', 'Posts']} />)
  const nav = utils.getByRole('navigation')
  const ul = utils.getByRole('list')
  const lists = utils.getAllByRole('listitem')
  return {
    ...utils,
    nav,
    ul,
    lists,
  }
}

describe('BaseHeader', () => {
  it('navタグが存在すること', () => {
    const { nav } = setup()
    expect(nav).toBeInTheDocument()
  })
  it('ulタグが存在すること', () => {
    const { ul } = setup()
    expect(ul).toBeInTheDocument()
  })
  it('liタグが存在すること', () => {
    const { lists } = setup()
    expect(lists).toHaveLength(2)
  })
  it('aタグが存在すること', () => {
    setup()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Posts' })).toBeInTheDocument()
  })
  it('正しいclassが付与されていること', () => {
    const { nav, ul } = setup()
    expect(nav).toHaveClass('nav')
    expect(ul).toHaveClass('list')
  })
})
