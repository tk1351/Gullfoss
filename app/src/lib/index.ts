import { FALink, Link } from '../types'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { PostItem } from '../api/v1/posts'
import { TagItem } from '../api/v1/tags'

export const headerLinks: Link[] = [
  {
    value: 'Home',
    href: '/',
  },
  { value: 'Posts', href: '/posts' },
]

export const footerLinks: FALink[] = [
  { icon: faTwitter, href: '#' },
  { icon: faGithub, href: '#' },
]

export const items: { title: string; date: string }[] = [
  { title: 'post', date: '2022-01-01' },
  { title: 'lorem', date: '2022-01-01' },
  { title: 'ipsum', date: '2022-01-01' },
  { title: 'angular', date: '2022-01-01' },
  { title: 'react', date: '2022-01-01' },
  { title: 'node.js', date: '2022-01-01' },
  { title: 'python', date: '2022-01-01' },
  { title: 'rust', date: '2022-01-01' },
  { title: 'golang', date: '2022-01-01' },
  { title: 'foo', date: '2022-01-01' },
]

export const tags: string[] = ['Angular', 'React', 'Vue', 'Svelte']

export const mockTagItems: TagItem[] = [
  {
    id: 'react',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    tag: 'React',
  },
  {
    id: 'docker',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    tag: 'Docker',
  },
  {
    id: 'angular',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    tag: 'Angular',
  },
  {
    id: 'vue',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    tag: 'Vue',
  },
  {
    id: 'svelte',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    tag: 'Svelte',
  },
]

export const mockPostItems: PostItem[] = [
  {
    id: 'lorem',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'lorem',
    subTitle: 'lorem',
    content: '<div>lorem</div>',
    tags: mockTagItems,
  },
  {
    id: 'ipsum',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'ipsum',
    subTitle: 'ipsum',
    content: '<div>ipsum</div>',
    tags: mockTagItems,
  },
  {
    id: 'dolor',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'dolor',
    subTitle: 'dolor',
    content: '<div>dolor</div>',
    tags: mockTagItems,
  },
  {
    id: 'sit',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'sit',
    subTitle: 'sit',
    content: '<div>sit</div>',
    tags: mockTagItems,
  },
  {
    id: 'amet',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'amet',
    subTitle: 'amet',
    content: '<div>amet</div>',
    tags: mockTagItems,
  },
  {
    id: 'consectetur',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'consectetur',
    subTitle: 'consectetur',
    content: '<div>consectetur</div>',
    tags: mockTagItems,
  },
  {
    id: 'adipiscing',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'adipiscing',
    subTitle: 'adipiscing',
    content: '<div>adipiscing</div>',
    tags: mockTagItems,
  },
  {
    id: 'elit',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'elit',
    subTitle: 'elit',
    content: '<div>elit</div>',
    tags: mockTagItems,
  },
  {
    id: 'aenean',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'aenean',
    subTitle: 'aenean',
    content: '<div>aenean</div>',
    tags: mockTagItems,
  },
  {
    id: 'tincidunt',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-01',
    publishedAt: '2022-01-01',
    title: 'tincidunt',
    subTitle: 'tincidunt',
    content: '<div>tincidunt</div>',
    tags: mockTagItems,
  },
]

export const mockItem: PostItem = {
  id: '12kfdjasdg',
  createdAt: '2022-01-01',
  updatedAt: '2022-01-01',
  publishedAt: '2022-01-01',
  title: 'mock title',
  subTitle: 'mock sub title',
  content: '<div>mock content</div>',
  tags: mockTagItems,
}
