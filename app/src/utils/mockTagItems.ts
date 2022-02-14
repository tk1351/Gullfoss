import { TagItem } from '../api/v1/tags'

const arrayLength = 18
const dummyArray = [...Array(arrayLength)].map((_, index) => String(index))

export const generateMockTagItems = (date: string): TagItem[] => {
  return dummyArray.map((item) => {
    return {
      id: item,
      createdAt: date,
      updatedAt: date,
      publishedAt: date,
      revisedAt: date,
      tag: item,
    }
  })
}
