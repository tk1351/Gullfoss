import { mockMethods } from 'aspida-mock'
import { PostItem } from './index'
import { mockTagItems } from '../../../lib'

export interface Methods {
  get: {
    status: 200
    resBody: PostItem
  }
}

const mockItem: PostItem = {
  id: '12kfdjasdg',
  createdAt: '2022-01-01',
  updatedAt: '2022-01-01',
  publishedAt: '2022-01-01',
  title: 'mock title',
  subTitle: 'mock sub title',
  content: '<div>mock content</div>',
  tags: mockTagItems,
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: mockItem,
  }),
})
