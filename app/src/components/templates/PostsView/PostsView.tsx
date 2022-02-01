import { VFC } from 'react'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import styles from './PostsView.module.css'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import { tags } from '../../../lib'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  heading: string
  posts: CommonList<PostItem>
}

const PostsView: VFC<Props> = ({ heading, posts }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BaseForm />
      <BaseTags tags={tags} />
      <BasePostList items={posts} posts />
    </div>
  )
}

export default PostsView
