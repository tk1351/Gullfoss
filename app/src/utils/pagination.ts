const initialPage = 1
const totalPostsItem = 10

export const pageOffset = (page: number) => {
  if (Math.sign(page) === -1) return 0
  return page === initialPage ? 0 : page * totalPostsItem - totalPostsItem
}
