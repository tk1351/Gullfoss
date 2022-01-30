import { VFC } from 'react'
import BaseHeading1 from '../../atoms/BaseHeading1/BaseHeading1'
import styles from './PostView.module.css'
import BaseDescription from '../../atoms/BaseDescription/BaseDescription'
import BaseDate from '../../atoms/BaseDate/BaseDate'
import BaseTags from '../../molecules/BaseTags/BaseTags'

const PostView: VFC = () => {
  const { wrapper } = styles
  return (
    <div className={wrapper}>
      <BaseHeading1 text={'Lorem Ipsum'} />
      <BaseDate date={'2022-01-01'} />
      <BaseTags tags={['React', 'Next.js']} />
      <BaseDescription text={'Lorem Ipsum'} />
    </div>
  )
}

export default PostView
