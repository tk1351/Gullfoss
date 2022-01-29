import { VFC } from 'react'
import MainView from '../../templates/MainView/MainView'

const MainPage: VFC = () => {
  const items: { title: string; date: string }[] = [
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
    { title: 'post', date: '2022-01-01' },
  ]
  return <MainView heading={'Posts'} items={items} />
}

export default MainPage
