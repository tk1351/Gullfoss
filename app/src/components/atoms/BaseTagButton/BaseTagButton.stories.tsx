import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseTagButton from './BaseTagButton'

export default {
  title: 'BaseTagButton',
  component: BaseTagButton,
} as ComponentMeta<typeof BaseTagButton>

const Template: ComponentStory<typeof BaseTagButton> = (args) => (
  <BaseTagButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Next.js',
}
