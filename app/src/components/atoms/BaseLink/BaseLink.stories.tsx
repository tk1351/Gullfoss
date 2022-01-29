import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseLink from './BaseLink'

export default {
  title: 'BaseLink',
  component: BaseLink,
} as ComponentMeta<typeof BaseLink>

const Template: ComponentStory<typeof BaseLink> = (args) => (
  <BaseLink {...args} />
)

export const NavigationLink = Template.bind({})
NavigationLink.args = {
  value: 'Home',
  href: '/',
  state: 'navigation',
}

export const MorePostsLink = Template.bind({})
MorePostsLink.args = {
  value: 'See more posts',
  href: '/',
  state: 'morePosts',
}

export const CheckedLink = Template.bind({})
CheckedLink.args = {
  value: 'Checked',
  href: '/',
  state: 'navigation',
  checked: true,
}
