import { VFC } from 'react'
import styles from './BaseTagButton.module.css'

type Props = {
  label: string
}

const BaseTagButton: VFC<Props> = ({ label }) => {
  const { tag } = styles
  return <button className={tag}>{label}</button>
}

export default BaseTagButton
