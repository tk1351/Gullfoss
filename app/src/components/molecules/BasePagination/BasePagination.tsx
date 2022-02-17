import { VFC } from 'react'
import Link from 'next/link'
import styles from './BasePagination.module.css'

const BasePagination: VFC = () => {
  const { pagination, list } = styles
  return (
    <nav className={pagination}>
      <ul className={list}>
        <li>
          <Link href='#'>
            <a>prev</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>1</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>2</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>3</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>next</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BasePagination
