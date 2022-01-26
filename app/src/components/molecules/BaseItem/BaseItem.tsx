import { VFC } from 'react'
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
    <li className={item}>
      <BaseHeading4 text={title} />
      <BaseDate date={date} />
    </li>
  )
}

export default BaseItem
