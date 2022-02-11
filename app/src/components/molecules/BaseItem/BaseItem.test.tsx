import { render, screen } from '@testing-library/react'
import BaseItem from './BaseItem'

const setup = () => {
  const utils = render(
    <BaseItem id={'post-id'} title={'Post Title'} date={'2022-01-01'} />
  )
  const listItem = utils.getByRole('listitem')
  const article = utils.getByRole('article')
  const title = utils.getByRole('heading')
  const date = utils.getByLabelText('post-date')
  const link = utils.getByRole('link')
  return {
    ...utils,
    listItem,
    article,
    title,
    date,
    link,
  }
}

describe('BaseItem', () => {
  it('list要素が存在すること', () => {
    const { listItem } = setup()
    expect(listItem).toBeInTheDocument()
  })
  it('articleタグが存在すること', () => {
    const { article } = setup()
    expect(article).toBeInTheDocument()
  })
  it('記事のタイトルが存在すること', () => {
    const { title } = setup()
    expect(title).toBeInTheDocument()
  })
  it('投稿の日付が存在すること', () => {
    const { date } = setup()
    expect(date).toBeInTheDocument()
  })
  it('正しいclassが付与されていること', () => {
    const { link } = setup()
    expect(link).toHaveClass('item')
  })
})
