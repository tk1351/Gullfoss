import { VFC } from 'react'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import styles from './CategoryView.module.css'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  heading: string
  posts: CommonList<PostItem>
}

const CategoryView: VFC<Props> = ({ heading, posts }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BaseForm />
      <BasePostList items={posts} posts />
    </div>
  )
}

export default CategoryView
