import { VFC } from 'react'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BaseItem from '../../molecules/BaseItem/BaseItem'
import styles from './PostsView.module.css'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import BasePostList from '../../organisms/BasePostList/BasePostList'

type Props = {
  heading: string
  items: {
    title: string
    date: string
  }[]
}

const PostsView: VFC<Props> = ({ heading, items }) => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={heading} />
      <BaseForm />
      <BaseTags tags={['Angular', 'React', 'Vue', 'Svelte']} />
      <BasePostList items={items} />
    </div>
  )
}

export default PostsView
