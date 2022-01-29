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
