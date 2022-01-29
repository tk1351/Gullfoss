import { ComponentMeta, ComponentStory } from '@storybook/react'
import BasePostList from './BasePostList'

export default {
  title: 'BasePostList',
  component: BasePostList,
} as ComponentMeta<typeof BasePostList>

const Template: ComponentStory<typeof BasePostList> = (args) => (
  <BasePostList {...args} />
)

export const PostList = Template.bind({})
PostList.args = {
  items: [
    { title: 'Learn Angular', date: '2022-01-01' },
    { title: 'Learn React', date: '2022-01-01' },
    { title: 'Learn Vue', date: '2022-01-01' },
    { title: 'Learn Svelte', date: '2022-01-01' },
    { title: 'Learn Angular', date: '2022-01-01' },
    { title: 'Learn React', date: '2022-01-01' },
    { title: 'Learn Vue', date: '2022-01-01' },
    { title: 'Learn Svelte', date: '2022-01-01' },
    { title: 'Learn Angular', date: '2022-01-01' },
    { title: 'Learn React', date: '2022-01-01' },
    { title: 'Learn Vue', date: '2022-01-01' },
    { title: 'Learn Svelte', date: '2022-01-01' },
  ],
}
