import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseInput from './BaseInput'

export default {
  title: 'BaseInput',
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} />
)

export const TextInput = Template.bind({})
TextInput.args = {
  placeholder: 'Search...',
  width: 600,
  height: 40,
}
