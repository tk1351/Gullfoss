import { VFC } from 'react'
import BaseItem from '../../molecules/BaseItem/BaseItem'
import styles from './BasePostList.module.css'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  items: CommonList<PostItem>
  posts?: boolean
}

const BasePostList: VFC<Props> = ({ items, posts }) => {
  const { articleList, postsPage } = styles
  const { contents } = items
  return (
    <ul className={`${articleList} ${posts && postsPage}`}>
      {contents.map((content, index) => (
        <BaseItem
          id={content.id}
          title={content.title}
          date={content.createdAt}
          key={index}
        />
      ))}
    </ul>
  )
}

export default BasePostList
