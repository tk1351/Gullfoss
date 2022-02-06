import { mockMethods } from 'aspida-mock'
import { PostItem } from './index'
import { mockItem } from '../../../lib'

export interface Methods {
  get: {
    status: 200
    resBody: PostItem
  }
}

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: mockItem,
  }),
})
