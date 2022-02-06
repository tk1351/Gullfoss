import { VFC } from 'react'
import PostView from '../../templates/PostView/PostView'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  post: PostItem
}

const PostPage: VFC<Props> = ({ post }) => {
  return <PostView post={post} />
}

export default PostPage
