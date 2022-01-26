import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseForm from './BaseForm'

export default {
  title: 'BaseForm',
  component: BaseForm,
} as ComponentMeta<typeof BaseForm>

const Template: ComponentStory<typeof BaseForm> = (args) => <BaseForm />

export const Form = Template.bind({})
