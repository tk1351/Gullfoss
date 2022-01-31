import { mockMethods } from 'aspida-mock'
import { CommonItem, CommonList } from '../../types'
import { TagItem } from '../tags'
import { mockPostItems } from '../../../lib'

export interface PostItem extends CommonItem {
  title: string
  subTitle: string
  content: string
  tags: TagItem[]
}

export interface Methods {
  get: {
    status: 200
    resBody: CommonList<PostItem>
  }
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: {
      contents: mockPostItems,
      totalCount: mockPostItems.length,
      offset: 0,
      limit: 10,
    },
  }),
})
