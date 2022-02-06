import { VFC } from 'react'
import styles from './BaseDescription.module.css'

type Props = {
  body: string
}

const BaseDescription: VFC<Props> = ({ body }) => {
  const { description } = styles
  return (
    <div
      aria-label='description'
      className={description}
      dangerouslySetInnerHTML={{
        __html: body,
      }}
    />
  )
}

export default BaseDescription
