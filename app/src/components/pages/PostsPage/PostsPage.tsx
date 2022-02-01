import { VFC } from 'react'
import PostsView from '../../templates/PostsView/PostsView'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'
import { TagItem } from '../../../api/v1/tags'

type Props = {
  posts: CommonList<PostItem>
  tags: CommonList<TagItem>
}

const PostsPage: VFC<Props> = ({ posts, tags }) => {
  return <PostsView heading='Posts' posts={posts} tags={tags} />
}

export default PostsPage
