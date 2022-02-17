import { VFC } from 'react'
import styles from './BaseNoContent.module.css'

const BaseNoContent: VFC = () => {
  const { noContent } = styles
  return (
    <p className={noContent} aria-label='no-content'>
      No Content...
    </p>
  )
}

export default BaseNoContent
