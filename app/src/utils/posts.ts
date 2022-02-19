import { CommonList } from '../api/types'
import { PostItem } from '../api/v1/posts'
import { client } from '../api'
import { LIMIT_POSTS_DATA } from '../lib'
import { pageOffset } from './pagination'

export const getPostsDataPerPage = async (
  page: number
): Promise<CommonList<PostItem>> => {
  const offset = pageOffset(page)
  return await client.v1.posts.$get({
    query: {
      limit: LIMIT_POSTS_DATA,
      offset,
    },
  })
}
