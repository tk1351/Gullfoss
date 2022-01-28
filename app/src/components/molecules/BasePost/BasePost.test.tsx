import { render, screen } from '@testing-library/react'
import BasePost from './BasePost'

const setup = () => {
  const utils = render(
    <BasePost title={'title'} date={'2022-01-01'} description={'description'} />
  )
  const post = utils.getByLabelText('post')
  const title = utils.getByRole('heading')
  const date = utils.getByLabelText('post-date')
  const description = utils.getByLabelText('post-date')
  return {
    ...utils,
    post,
    title,
    date,
    description,
  }
}

describe('BasePost', () => {
  it('headingが存在すること', () => {
    const { title } = setup()
    expect(title).toBeInTheDocument()
  })
  it('dateが存在すること', () => {
    const { date } = setup()
    expect(date).toBeInTheDocument()
  })
  it('descriptionが存在すること', () => {
    const { description } = setup()
    expect(description).toBeInTheDocument()
  })
  it('正しくpropsが渡っていること', () => {
    setup()
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('2022-01-01')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
  })
  it('classが正しく付与されていること', () => {
    const { post } = setup()
    expect(post).toHaveClass('post')
  })
})
