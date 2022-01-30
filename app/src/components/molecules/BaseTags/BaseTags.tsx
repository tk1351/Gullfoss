import { VFC } from 'react'
import Link from 'next/link'
import BaseTagButton from '../../atoms/BaseTagButton/BaseTagButton'
import styles from './BaseTags.module.css'

type Props = {
  tags: string[]
}

const BaseTags: VFC<Props> = ({ tags }) => {
  const { list, tagItem } = styles
  return (
    <ul className={list}>
      {tags.map((tag, index) => (
        <li key={index} className={tagItem}>
          <Link href={`/category/${tag}`}>
            <a>
              <BaseTagButton label={tag} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BaseTags
