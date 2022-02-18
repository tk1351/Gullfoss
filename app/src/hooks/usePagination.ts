import { useState } from 'react'

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

  const [currentPage, setCurrentPage] = useState(initialPage)

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
