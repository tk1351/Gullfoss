import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseHeading2 from './BaseHeading2'

export default {
  title: 'BaseHeading2',
  component: BaseHeading2,
} as ComponentMeta<typeof BaseHeading2>

const Template: ComponentStory<typeof BaseHeading2> = (args) => (
  <BaseHeading2 {...args} />
)

export const Head2 = Template.bind({})
Head2.args = {
  text: 'Head2',
}
