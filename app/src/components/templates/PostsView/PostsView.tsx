import { useEffect, VFC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styles from './PostsView.module.css'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import BasePagination from '../../molecules/BasePagination/BasePagination'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'
import { TagItem } from '../../../api/v1/tags'
import { currentPageState } from '../../../recoil/atoms/pagination'
import { postsState } from '../../../recoil/atoms/post'
import { getPostsDataPerPage } from '../../../utils/posts'

type Props = {
  heading: string
  posts: CommonList<PostItem>
  tags: CommonList<TagItem>
}

const PostsView: VFC<Props> = ({ heading, posts, tags }) => {
  const { wrapper } = styles

  const currentPage = useRecoilValue(currentPageState)
  const [currentPosts, setCurrentPosts] = useRecoilState(postsState)

  useEffect(() => {
    setCurrentPosts(posts)
  }, [])

  useEffect(() => {
    if (currentPage === 1) {
      ;(async () => {
        const data = await getPostsDataPerPage(1)
        setCurrentPosts(data)
      })()
    }
    if (currentPage === 2) {
      ;(async () => {
        const data = await getPostsDataPerPage(2)
        setCurrentPosts(data)
      })()
    }
  }, [currentPage])

  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BaseForm />
      <BaseTags tags={tags} />
      {currentPosts ? (
        <BasePostList items={currentPosts} posts />
      ) : (
        <div>Loading...</div>
      )}

      <BasePagination totalCount={posts.totalCount} />
    </div>
  )
}

export default PostsView
