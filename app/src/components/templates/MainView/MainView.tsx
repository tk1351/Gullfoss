import { VFC } from 'react'
import styles from './MainView.module.css'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import BaseLink from '../../atoms/BaseLink/BaseLink'

type Props = {
  heading: string
  items: {
    title: string
    date: string
  }[]
}

const MainView: VFC<Props> = ({ heading, items }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BasePostList items={items} />
      <BaseLink value='See more posts' href={'/posts'} state='morePosts' />
    </div>
  )
}

export default MainView
