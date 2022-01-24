import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseHeading1 from './BaseHeading1'

export default {
  title: 'BaseHeading1',
  component: BaseHeading1,
} as ComponentMeta<typeof BaseHeading1>

const Template: ComponentStory<typeof BaseHeading1> = (args) => (
  <BaseHeading1 {...args} />
)

export const Title = Template.bind({})
Title.args = {
  text: 'Post Title',
}
