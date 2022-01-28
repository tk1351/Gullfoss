import { ComponentMeta, ComponentStory } from '@storybook/react'
import BasePost from './BasePost'

export default {
  title: 'BasePost',
  component: BasePost,
} as ComponentMeta<typeof BasePost>

const Template: ComponentStory<typeof BasePost> = (args) => (
  <BasePost {...args} />
)

export const Post = Template.bind({})
Post.args = {
  title: 'Title',
  date: '2022-01-01',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat elit vitae libero tempus, ut gravida mauris mattis. In tristique nec ex sed volutpat. Pellentesque varius sapien sed erat aliquet, at ornare lorem sagittis. Quisque fermentum semper erat, sed egestas purus aliquam nec. Morbi maximus vulputate nisi non semper. In hac habitasse platea dictumst. Integer id mattis nisi, vel iaculis orci. Integer aliquet mauris quis nisl aliquet dictum. Donec scelerisque, ante id cursus porta, sapien erat pretium neque, et euismod est libero id tellus. Praesent rhoncus ex accumsan ultricies aliquam. Integer commodo lectus in purus lobortis, sed scelerisque ex faucibus. Duis sed viverra urna.',
}
