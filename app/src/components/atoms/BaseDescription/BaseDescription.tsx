import { VFC } from 'react'
import styles from './BaseDescription.module.css'

type Props = {
  text: string
}

const BaseDescription: VFC<Props> = ({ text }) => {
  const { description } = styles
  return (
    <p aria-label='description' className={description}>
      {text}
    </p>
  )
}

export default BaseDescription
