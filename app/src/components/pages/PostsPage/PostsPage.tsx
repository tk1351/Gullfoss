import { useEffect, VFC } from 'react'
import PostsView from '../../templates/PostsView/PostsView'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'
import { TagItem } from '../../../api/v1/tags'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentPageState } from '../../../recoil/atoms/pagination'
import { postsState } from '../../../recoil/atoms/post'
import { getPostsDataPerPage } from '../../../utils/posts'

type Props = {
  posts: CommonList<PostItem>
  tags: CommonList<TagItem>
}

const PostsPage: VFC<Props> = ({ posts, tags }) => {
  const currentPage = useRecoilValue(currentPageState)
  const [currentPosts, setCurrentPosts] = useRecoilState(postsState)

  useEffect(() => {
    setCurrentPosts(posts)
  }, [])

  useEffect(() => {
    ;(async () => {
      const data = await getPostsDataPerPage(currentPage)
      setCurrentPosts(data)
    })()
  }, [currentPage])
  return <PostsView heading='Posts' posts={currentPosts!} tags={tags} />
}

export default PostsPage
