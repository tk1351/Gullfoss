import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseFooter from './BaseFooter'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  title: 'BaseFooter',
  component: BaseFooter,
} as ComponentMeta<typeof BaseFooter>

const Template: ComponentStory<typeof BaseFooter> = (args) => (
  <BaseFooter {...args} />
)

export const Footer = Template.bind({})
Footer.args = {
  links: [
    { icon: faTwitter, href: '#' },
    { icon: faGithub, href: '#' },
  ],
}
