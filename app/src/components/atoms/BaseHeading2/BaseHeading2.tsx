import { VFC } from 'react'
import styles from './BaseHeading2.module.css'

type Props = {
  text: string
}

const BaseHeading2: VFC<Props> = ({ text }) => {
  const { heading } = styles
  return <h2 className={heading}>{text}</h2>
}

export default BaseHeading2
