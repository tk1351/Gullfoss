import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseDate from './BaseDate'

export default {
  title: 'BaseDate',
  component: BaseDate,
} as ComponentMeta<typeof BaseDate>

const Template: ComponentStory<typeof BaseDate> = (args) => (
  <BaseDate {...args} />
)

export const Date = Template.bind({})
Date.args = {
  date: 'January 01, 2022',
}
