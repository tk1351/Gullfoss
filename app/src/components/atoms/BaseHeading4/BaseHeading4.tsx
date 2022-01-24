import { VFC } from 'react'
import styles from './BaseHeading4.module.css'

type Props = {
  text: string
}

const BaseHeading4: VFC<Props> = ({ text }) => {
  const { heading } = styles
  return <h4 className={heading}>{text}</h4>
}

export default BaseHeading4
