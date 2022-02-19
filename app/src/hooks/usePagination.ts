import { useRecoilState } from 'recoil'
import { currentPageState } from '../recoil/atoms/pagination'

type ReturnUsePagination = {
  currentPage: number
  totalPages: number
  onForwardClicked: () => void
  onBackClicked: () => void
}

export const usePagination = (totalCount: number): ReturnUsePagination => {
  const initialPage = 1
  const pageLimit = 10
  const totalPages = Math.ceil(totalCount / pageLimit)

  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

  const onForwardClicked = () => {
    if (currentPage === totalPages) return
    setCurrentPage(currentPage + 1)
  }
  const onBackClicked = () => {
    if (currentPage === initialPage) return
    setCurrentPage(currentPage - 1)
  }

  return { currentPage, totalPages, onForwardClicked, onBackClicked }
}
