import { VFC } from 'react'
import styles from './BaseHeading1.module.css'

type Props = {
  text: string
}

const BaseHeading1: VFC<Props> = ({ text }) => {
  const { heading } = styles
  return <h1 className={heading}>{text}</h1>
}

export default BaseHeading1
