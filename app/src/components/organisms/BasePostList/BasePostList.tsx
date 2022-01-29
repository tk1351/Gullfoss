import { VFC } from 'react'
import BaseItem from '../../molecules/BaseItem/BaseItem'
import styles from './BasePostList.module.css'

type Props = {
  items: {
    title: string
    date: string
  }[]
}

const BasePostList: VFC<Props> = ({ items }) => {
  const { articleList } = styles
  return (
    <ul className={articleList}>
      {items.map((item, index) => (
        <BaseItem title={item.title} date={item.date} key={index} />
      ))}
    </ul>
  )
}

export default BasePostList
