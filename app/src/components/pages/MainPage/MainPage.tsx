import { VFC } from 'react'
import MainView from '../../templates/MainView/MainView'
import { CommonList } from '../../../api/types'
import { PostItem } from '../../../api/v1/posts'

type Props = {
  posts: CommonList<PostItem>
}

const MainPage: VFC<Props> = ({ posts }) => {
  return <MainView heading={'Latest Posts'} posts={posts} />
}

export default MainPage
