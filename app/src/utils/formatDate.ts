import { format } from 'date-fns'

export const formatCreatedAt = (createdAt: string): string => {
  return format(new Date(createdAt), 'yyyy-MM-dd')
}
