import { render, screen } from '@testing-library/react'
import BaseTags from './BaseTags'

const setup = () => {
  const utils = render(<BaseTags tags={['React', 'Vue']} />)
  const list = utils.getByRole('list')
  const listitems = utils.getAllByRole('listitem')
  const links = utils.getAllByRole('link')
  const buttons = utils.getAllByRole('button')
  return {
    ...utils,
    list,
    listitems,
    links,
    buttons,
  }
}

describe('BaseTags', () => {
  it('ulタグが存在すること', () => {
    const { list } = setup()
    expect(list).toBeInTheDocument()
  })
  it('liタグが存在すること', () => {
    const { listitems } = setup()
    expect(listitems).toHaveLength(2)
  })
  it('aタグが存在すること', () => {
    const { links } = setup()
    expect(links).toHaveLength(2)
  })
  it('buttonタグが存在すること', () => {
    const { buttons } = setup()
    expect(buttons).toHaveLength(2)
  })
  it('propsが正しく渡っていること', () => {
    setup()
    expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vue' })).toBeInTheDocument()
  })
  it('正しくclassが付与されていること', () => {
    const { list } = setup()
    expect(list).toHaveClass('list')
  })
})
