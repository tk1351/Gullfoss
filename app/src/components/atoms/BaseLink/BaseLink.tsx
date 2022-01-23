import { VFC } from 'react'
import styles from './BaseLink.module.css'

type LinkState = 'navigation' | 'morePosts'

type Props = {
  value: string
  state: LinkState
}

const BaseLink: VFC<Props> = ({ value, state }) => {
  const { link, linkMorePosts } = styles
  return (
    <a href='#' className={`${link} ${state === 'morePosts' && linkMorePosts}`}>
      {value}
    </a>
  )
}

export default BaseLink
