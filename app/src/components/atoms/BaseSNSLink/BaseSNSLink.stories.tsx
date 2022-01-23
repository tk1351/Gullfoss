import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseSNSLink from './BaseSNSLink'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  title: 'BaseSNSLink',
  component: BaseSNSLink,
} as ComponentMeta<typeof BaseSNSLink>

const Template: ComponentStory<typeof BaseSNSLink> = (args) => (
  <BaseSNSLink {...args} />
)

export const Twitter = Template.bind({})
Twitter.args = {
  icon: faTwitter,
  href: '#',
}

export const Github = Template.bind({})
Github.args = {
  icon: faGithub,
  href: '#',
}
