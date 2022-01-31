import { CommonItem, CommonList } from '../../types'
import { TagItem } from '../tags'

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
