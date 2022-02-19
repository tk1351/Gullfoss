import { atom } from 'recoil'
import { CommonList } from '../../api/types'
import { PostItem } from '../../api/v1/posts'

export const postsState = atom<CommonList<PostItem> | undefined>({
  key: 'postsState',
  default: undefined,
})
