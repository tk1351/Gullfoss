import { VFC } from 'react'
import PostsView from '../../templates/PostsView/PostsView'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  posts: CommonList<PostItem>
}

const PostsPage: VFC<Props> = ({ posts }) => {
  return <PostsView heading='Posts' posts={posts} />
}

export default PostsPage
