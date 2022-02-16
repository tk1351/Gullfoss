import { VFC } from 'react'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'
import { TagItem } from '../../../api/v1/tags'
import SearchResultView from '../../templates/SearchResultView/SearchResultView'

type Props = {
  posts: CommonList<PostItem>
  tags: CommonList<TagItem>
  query: string
}

const SearchResultPage: VFC<Props> = ({ posts, tags, query }) => {
  return <SearchResultView heading={query} posts={posts} tags={tags} />
}

export default SearchResultPage
