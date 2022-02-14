import { VFC } from 'react'
import Link from 'next/link'
import BaseHeading4 from '../../atoms/BaseHeading4/BaseHeading4'
import BaseDate from '../../atoms/BaseDate/BaseDate'
import styles from './BaseItem.module.css'
import { formatCreatedAt } from '../../../utils/formatDate'

type Props = {
  id: string
  title: string
  date: string
}

const BaseItem: VFC<Props> = ({ id, title, date }) => {
  const { item } = styles
  const orderedCreatedAt = formatCreatedAt(date)
  return (
    <li>
      <article>
        <Link href={`/post/${id}`}>
          <a className={item}>
            <BaseHeading4 text={title} />
            <BaseDate date={orderedCreatedAt} />
          </a>
        </Link>
      </article>
    </li>
  )
}

export default BaseItem
