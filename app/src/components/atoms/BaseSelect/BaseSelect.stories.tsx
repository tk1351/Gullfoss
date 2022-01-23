import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseSelect from './BaseSelect'

export default {
  title: 'BaseSelect',
  component: BaseSelect,
} as ComponentMeta<typeof BaseSelect>

const Template: ComponentStory<typeof BaseSelect> = (args) => (
  <BaseSelect {...args} />
)

export const Sort = Template.bind({})
Sort.args = {
  options: ['Sort by date', 'Sort by popular'],
}
