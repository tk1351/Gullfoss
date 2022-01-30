import { VFC } from 'react'
import BaseHeading2 from '../../atoms/BaseHeading2/BaseHeading2'
import BaseForm from '../../molecules/BaseForm/BaseForm'
import BaseTags from '../../molecules/BaseTags/BaseTags'
import BasePostList from '../../organisms/BasePostList/BasePostList'
import { items, tags } from '../../../lib'
import styles from './CategoryView.module.css'

const CategoryView: VFC = () => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading2 text={'React'} />
      <BaseForm />
      <BaseTags tags={tags} />
      <BasePostList items={items} posts />
    </div>
  )
}

export default CategoryView
