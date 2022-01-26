import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseItem from './BaseItem'

export default {
  title: 'BaseItem',
  component: BaseItem,
} as ComponentMeta<typeof BaseItem>

const Template: ComponentStory<typeof BaseItem> = (args) => (
  <BaseItem {...args} />
)

export const Item = Template.bind({})
Item.args = {
  title: 'Post Title',
  date: '2022-01-01',
}
