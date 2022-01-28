import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseHeader from './BaseHeader'

export default {
  title: 'BaseHeader',
  component: BaseHeader,
} as ComponentMeta<typeof BaseHeader>

const Template: ComponentStory<typeof BaseHeader> = (args) => (
  <BaseHeader {...args} />
)

export const Header = Template.bind({})
Header.args = {
  links: ['Home', 'Posts'],
}
