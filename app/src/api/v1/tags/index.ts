import { CommonItem, CommonList } from '../../types'

export interface TagItem extends CommonItem {
  tag: string
}

export interface Methods {
  get: {
    status: 200
    resBody: CommonList<TagItem>
  }
}
