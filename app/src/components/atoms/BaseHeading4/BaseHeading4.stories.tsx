import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseHeading4 from './BaseHeading4'

export default {
  title: 'BaseHeading4',
  component: BaseHeading4,
} as ComponentMeta<typeof BaseHeading4>

const Template: ComponentStory<typeof BaseHeading4> = (args) => (
  <BaseHeading4 {...args} />
)

export const Head4 = Template.bind({})
Head4.args = {
  text: 'Head4',
}
