import { VFC } from 'react'
import BaseLink from '../../atoms/BaseLink/BaseLink'
import styles from './BaseHeader.module.css'

type Props = {
  links: string[]
}

const BaseHeader: VFC<Props> = ({ links }) => {
  const { nav, list } = styles
  return (
    <nav className={nav}>
      <ul className={list}>
        {links.map((link, index) => (
          <li key={index}>
            <BaseLink value={link} state={'navigation'} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BaseHeader
