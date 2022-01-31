import { mockMethods } from 'aspida-mock'
import { CommonItem, CommonList } from '../../types'
import { mockTagItems } from '../../../lib'

export interface TagItem extends CommonItem {
  tag: string
}

export interface Methods {
  get: {
    status: 200
    resBody: CommonList<TagItem>
  }
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: {
      contents: mockTagItems,
      totalCount: mockTagItems.length,
      offset: 0,
      limit: 10,
    },
  }),
})
