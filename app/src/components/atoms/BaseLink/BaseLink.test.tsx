import { render, screen } from '@testing-library/react'
import BaseLink, { LinkState } from './BaseLink'

const setup = (value: string, state: LinkState) => {
  const utils = render(<BaseLink value={value} state={state} />)
  const link = utils.getByRole('link')
  return {
    ...utils,
    link,
  }
}

describe('BaseLink', () => {
  it('navigationのlinkにvalueが正しく渡っている', () => {
    const { link } = setup('Link', 'navigation')
    expect(link).toBeInTheDocument()
  })
  it('morePostsのlinkにvalueが正しく渡っている', () => {
    const { link } = setup('Link', 'morePosts')
    expect(link).toBeInTheDocument()
  })
  it('navigationのlinkに正しいclassが渡っている', () => {
    const { link } = setup('Link', 'navigation')
    expect(link).toHaveClass('link')
  })
  it('morePostsのlinkに正しいclassが渡っている', () => {
    const { link } = setup('Link', 'morePosts')
    expect(link).toHaveClass('link linkMorePosts')
  })
})
