import { VFC } from 'react'
import BaseLink from '../../atoms/BaseLink/BaseLink'
import styles from './BaseHeader.module.css'
import { Link } from '../../../types'

type Props = {
  links: Link[]
}

const BaseHeader: VFC<Props> = ({ links }) => {
  const { nav, list, listItem } = styles
  return (
    <nav className={nav}>
      <ul className={list}>
        {links.map((link, index) => (
          <li key={index} className={listItem}>
            <BaseLink
              value={link.value}
              href={link.href}
              state={'navigation'}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BaseHeader
