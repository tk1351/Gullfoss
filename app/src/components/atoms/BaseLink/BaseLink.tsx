import { VFC } from 'react'
import styles from './BaseLink.module.css'

export type LinkState = 'navigation' | 'morePosts'

type Props = {
  value: string
  state: LinkState
  checked?: boolean
}

const BaseLink: VFC<Props> = ({ value, state, checked }) => {
  const { link, linkMorePosts, checkedLink } = styles
  return (
    <a
      href='#'
      className={`${link} ${state === 'morePosts' && linkMorePosts} ${
        checked && checkedLink
      }`}
    >
      {value}
    </a>
  )
}

export default BaseLink
