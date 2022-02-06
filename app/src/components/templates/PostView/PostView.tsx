import { VFC } from 'react'
import BaseHeading1 from '../../atoms/BaseHeading1/BaseHeading1'
import styles from './PostView.module.css'
import BaseDescription from '../../atoms/BaseDescription/BaseDescription'
import BaseDate from '../../atoms/BaseDate/BaseDate'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import { mockTagItems } from '../../../lib'
import { CommonList } from '../../../api/types'
import { TagItem } from '../../../api/v1/tags'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  post: PostItem
}

const PostView: VFC<Props> = ({ post }) => {
  const { wrapper } = styles

  const { title, createdAt, tags, content } = post

  const orderedTags: CommonList<TagItem> = {
    contents: tags,
    totalCount: tags.length,
    offset: 0,
    limit: 10,
  }
  return (
    <div className={wrapper}>
      <BaseHeading1 text={title} />
      <BaseDate date={createdAt} />
      <BaseTags tags={orderedTags} />
      <BaseDescription text={content} />
    </div>
  )
}

export default PostView
