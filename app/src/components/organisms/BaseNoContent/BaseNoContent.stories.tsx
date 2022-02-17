import BaseNoContent from './BaseNoContent'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'BaseNoContent',
  component: BaseNoContent,
} as ComponentMeta<typeof BaseNoContent>

const Template: ComponentStory<typeof BaseNoContent> = (args) => (
  <BaseNoContent />
)

export const NoContent = Template.bind({})
