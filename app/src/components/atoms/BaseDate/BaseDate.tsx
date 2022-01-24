import { VFC } from 'react'
import styles from './BaseDate.module.css'

type Props = {
  date: string
}

const BaseDate: VFC<Props> = ({ date }) => {
  const { postDate } = styles
  return (
    <p aria-label='post-date' className={postDate}>
      {date}
    </p>
  )
}

export default BaseDate
