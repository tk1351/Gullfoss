import { VFC } from 'react'
import styles from './MainView.module.css'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BaseItem from '../../molecules/BaseItem/BaseItem'

type Props = {
  heading: string
  items: {
    title: string
    date: string
  }[]
}

const MainView: VFC<Props> = ({ heading, items }) => {
  const { wrapper, articleList } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <ul className={articleList}>
        {items.map((item, index) => (
          <BaseItem title={item.title} date={item.date} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default MainView
