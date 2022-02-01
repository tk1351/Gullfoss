import { VFC } from 'react'
import Link from 'next/link'
import BaseTagButton from '../../atoms/BaseTagButton/BaseTagButton'
import styles from './BaseTags.module.css'
import { CommonList } from '../../../api/types'
import { TagItem } from '../../../api/v1/tags'

type Props = {
  tags: CommonList<TagItem>
}

const BaseTags: VFC<Props> = ({ tags }) => {
  const { list, tagItem } = styles
  const { contents } = tags
  return (
    <ul className={list}>
      {contents.map((content, index) => (
        <li key={index} className={tagItem}>
          <Link href={`/category/${content.tag}`}>
            <a>
              <BaseTagButton label={content.tag} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BaseTags
