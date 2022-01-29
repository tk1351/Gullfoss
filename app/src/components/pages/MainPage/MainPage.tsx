import { VFC } from 'react'
import MainView from '../../templates/MainView/MainView'
import { items } from '../../../lib'

const MainPage: VFC = () => {
  return <MainView heading={'Latest Posts'} items={items} />
}

export default MainPage
