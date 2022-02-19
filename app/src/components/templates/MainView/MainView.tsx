import { VFC } from 'react'
import styles from './MainView.module.css'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import BaseLink from '../../atoms/BaseLink/BaseLink'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  heading: string
  posts: CommonList<PostItem>
}

const MainView: VFC<Props> = ({ heading, posts }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BasePostList items={posts} />
      <BaseLink
        value='See more posts'
        href={{
          pathname: '/posts',
          query: { page: '1' },
        }}
        state='morePosts'
      />
    </div>
  )
}

export default MainView
