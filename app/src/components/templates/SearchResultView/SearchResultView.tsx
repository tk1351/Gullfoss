import { VFC } from 'react'
import styles from './SearchResultView.module.css'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'
import { TagItem } from '../../../api/v1/tags'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import BaseNoContent from '../../organisms/BaseNoContent/BaseNoContent'
import BasePagination from '../../molecules/BasePagination/BasePagination'

type Props = {
  heading: string
  posts: CommonList<PostItem>
  tags: CommonList<TagItem>
}

const SearchResultView: VFC<Props> = ({ heading, posts, tags }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BaseForm />
      <BaseTags tags={tags} />
      {posts.totalCount ? (
        <BasePostList items={posts} posts />
      ) : (
        <BaseNoContent />
      )}
      {posts.totalCount && <BasePagination totalCount={posts.totalCount} />}
    </div>
  )
}

export default SearchResultView
