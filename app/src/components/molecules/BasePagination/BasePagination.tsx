import { VFC } from 'react'
import styles from './BasePagination.module.css'
import { usePagination } from '../../../hooks/usePagination'

type Props = {
  totalCount: number
}

const BasePagination: VFC<Props> = ({ totalCount }) => {
  const { pagination, list } = styles

  const { currentPage, totalPages, onForwardClicked, onBackClicked } =
    usePagination(totalCount)

  return (
    <nav className={pagination}>
      <ul className={list}>
        <li>
          <button onClick={onBackClicked}>prev</button>
        </li>
        <li>
          <p>
            {currentPage} of {totalPages}
          </p>
        </li>
        <li>
          <button onClick={onForwardClicked}>next</button>
        </li>
      </ul>
    </nav>
  )
}

export default BasePagination
