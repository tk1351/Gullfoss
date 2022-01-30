import { FALink, Link } from '../types'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
