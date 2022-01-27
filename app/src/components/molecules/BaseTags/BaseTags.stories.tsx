import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseTags from './BaseTags'

export default {
  title: 'BaseTags',
  component: BaseTags,
} as ComponentMeta<typeof BaseTags>

const Template: ComponentStory<typeof BaseTags> = (args) => (
  <BaseTags {...args} />
)

export const TagsList = Template.bind({})
TagsList.args = {
  tags: ['React', 'Vue', 'Angular', 'Svelte'],
}
