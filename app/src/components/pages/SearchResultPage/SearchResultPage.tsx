import { useEffect, useState, VFC } from 'react'
import { useRouter } from 'next/router'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'
import { TagItem } from '../../../api/v1/tags'
import SearchResultView from '../../templates/SearchResultView/SearchResultView'
import { client } from '../../../api'

const SearchResultPage: VFC = () => {
  const router = useRouter()
  const query = router.query?.query

  const [result, setResult] = useState<CommonList<PostItem> | undefined>(
    undefined
  )
  const [tags, setTags] = useState<CommonList<TagItem> | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      const posts = await client.v1.posts.$get({
        query: { q: encodeURI(String(query)) },
      })
      const tagsData = await client.v1.tags.$get()

      setResult(posts)
      setTags(tagsData)
    })()
  }, [query])
  return (
    <>
      {!result && !tags ? (
        <p>loading...</p>
      ) : (
        <SearchResultView
          heading={String(query)}
          posts={result!}
          tags={tags!}
        />
      )}
    </>
  )
}

export default SearchResultPage
