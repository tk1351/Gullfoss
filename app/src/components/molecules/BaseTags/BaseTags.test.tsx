import { render, screen } from '@testing-library/react'
import BaseTags from './BaseTags'
import { mockTags } from '../../../lib'

const setup = () => {
  const utils = render(<BaseTags tags={mockTags} />)
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
    expect(listitems).toHaveLength(mockTags.contents.length)
  })
  it('aタグが存在すること', () => {
    const { links } = setup()
    expect(links).toHaveLength(mockTags.contents.length)
  })
  it('buttonタグが存在すること', () => {
    const { buttons } = setup()
    expect(buttons).toHaveLength(mockTags.contents.length)
  })
  it('正しくclassが付与されていること', () => {
    const { list } = setup()
    expect(list).toHaveClass('list')
  })
})
