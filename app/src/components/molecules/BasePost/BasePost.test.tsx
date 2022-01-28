import { render, screen } from '@testing-library/react'
import BasePost from './BasePost'

describe('BasePost', () => {
  it('headingが存在すること', () => {
    render(
      <BasePost
        title={'title'}
        date={'2022-01-01'}
        description={'description'}
      />
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
  it('dateが存在すること', () => {
    render(
      <BasePost
        title={'title'}
        date={'2022-01-01'}
        description={'description'}
      />
    )
    expect(screen.getByLabelText('post-date')).toBeInTheDocument()
  })
  it('descriptionが存在すること', () => {
    render(
      <BasePost
        title={'title'}
        date={'2022-01-01'}
        description={'description'}
      />
    )
    expect(screen.getByLabelText('description')).toBeInTheDocument()
  })
  it('正しくpropsが渡っていること', () => {
    render(
      <BasePost
        title={'title'}
        date={'2022-01-01'}
        description={'description'}
      />
    )
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('2022-01-01')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
  })
  it('classが正しく付与されていること', () => {
    render(
      <BasePost
        title={'title'}
        date={'2022-01-01'}
        description={'description'}
      />
    )
    expect(screen.getByLabelText('post')).toHaveClass('post')
  })
})
