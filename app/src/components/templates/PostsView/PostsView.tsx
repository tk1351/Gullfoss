import { VFC } from 'react'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import styles from './PostsView.module.css'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import { tags } from '../../../lib'

type Props = {
  heading: string
  items: {
    title: string
    date: string
  }[]
}

const PostsView: VFC<Props> = ({ heading, items }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BaseForm />
      <BaseTags tags={tags} />
      <BasePostList items={items} posts />
    </div>
  )
}

export default PostsView
