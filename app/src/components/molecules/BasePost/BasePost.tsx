import { VFC } from 'react'
import BaseHeading1 from '../../atoms/BaseHeading1/BaseHeading1'
import BaseDate from '../../atoms/BaseDate/BaseDate'
import BaseDescription from '../../atoms/BaseDescription/BaseDescription'

type Props = {
  title: string
  date: string
  description: string
}

const BasePost: VFC<Props> = ({ title, date, description }) => {
  return (
    <div aria-label='post' className='post'>
      <BaseHeading1 text={title} />
      <BaseDate date={date} />
      <BaseDescription text={description} />
    </div>
  )
}

export default BasePost
