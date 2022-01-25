import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseDescription from './BaseDescription'

export default {
  title: 'BaseDescription',
  component: BaseDescription,
} as ComponentMeta<typeof BaseDescription>

const Template: ComponentStory<typeof BaseDescription> = (args) => (
  <BaseDescription {...args} />
)

export const Description = Template.bind({})
Description.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat, arcu in cursus tincidunt, lacus turpis tincidunt lacus, vel mollis.',
}
