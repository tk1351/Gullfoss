import { VFC } from 'react'
import Link from 'next/link'
import BaseHeading4 from '../../atoms/BaseHeading4/BaseHeading4'
import BaseDate from '../../atoms/BaseDate/BaseDate'
import styles from './BaseItem.module.css'

type Props = {
  title: string
  date: string
}

const BaseItem: VFC<Props> = ({ title, date }) => {
  const { item } = styles
  return (
    <li>
      <article>
        <Link href={`/post/${title}`}>
          <a className={item}>
            <BaseHeading4 text={title} />
            <BaseDate date={date} />
          </a>
        </Link>
      </article>
    </li>
  )
}

export default BaseItem
