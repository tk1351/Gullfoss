import { VFC } from 'react'
import PostsView from '../../templates/PostsView/PostsView'
import { items } from '../../../lib'

const PostsPage: VFC = () => {
  return <PostsView heading='Posts' items={items} />
}

export default PostsPage
