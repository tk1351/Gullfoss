import { VFC } from 'react'
import CategoryView from '../../templates/CategoryView/CategoryView'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  posts: CommonList<PostItem>
  tagName: string
}

const CategoryPage: VFC<Props> = ({ posts, tagName }) => {
  return <CategoryView heading={tagName} posts={posts} />
}

export default CategoryPage
