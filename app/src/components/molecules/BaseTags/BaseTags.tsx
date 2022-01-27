import { VFC } from 'react'
import BaseTagButton from '../../atoms/BaseTagButton/BaseTagButton'
import styles from './BaseTags.module.css'

type Props = {
  tags: string[]
}

const BaseTags: VFC<Props> = ({ tags }) => {
  const { list } = styles
  return (
    <ul className={list}>
      {tags.map((tag, index) => (
        <li key={index}>
          <a href='#'>
            <BaseTagButton label={tag} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default BaseTags
