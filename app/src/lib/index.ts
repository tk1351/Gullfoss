import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FALink, Link } from '../types'
import { PostItem } from '../api/v1/posts'
import { TagItem } from '../api/v1/tags'
import { CommonList } from '../api/types'
import { generateMockTagItems } from '../utils/mockTagItems'

export const LIMIT_POSTS_DATA = 10

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

const createdAt = '2022-02-10T22:18:26.390Z'

export const mockTagItems: TagItem[] = generateMockTagItems(createdAt)

export const mockPostItems: PostItem[] = [
  {
    id: 'lorem',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'lorem',
    subTitle: 'lorem',
    content: '<div>lorem</div>',
    tags: mockTagItems,
  },
  {
    id: 'ipsum',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'ipsum',
    subTitle: 'ipsum',
    content: '<div>ipsum</div>',
    tags: mockTagItems,
  },
  {
    id: 'dolor',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'dolor',
    subTitle: 'dolor',
    content: '<div>dolor</div>',
    tags: mockTagItems,
  },
  {
    id: 'sit',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'sit',
    subTitle: 'sit',
    content: '<div>sit</div>',
    tags: mockTagItems,
  },
  {
    id: 'amet',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'amet',
    subTitle: 'amet',
    content: '<div>amet</div>',
    tags: mockTagItems,
  },
  {
    id: 'consectetur',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'consectetur',
    subTitle: 'consectetur',
    content: '<div>consectetur</div>',
    tags: mockTagItems,
  },
  {
    id: 'adipiscing',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'adipiscing',
    subTitle: 'adipiscing',
    content: '<div>adipiscing</div>',
    tags: mockTagItems,
  },
  {
    id: 'elit',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'elit',
    subTitle: 'elit',
    content: '<div>elit</div>',
    tags: mockTagItems,
  },
  {
    id: 'aenean',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'aenean',
    subTitle: 'aenean',
    content: '<div>aenean</div>',
    tags: mockTagItems,
  },
  {
    id: 'tincidunt',
    createdAt: createdAt,
    updatedAt: createdAt,
    publishedAt: createdAt,
    revisedAt: createdAt,
    title: 'tincidunt',
    subTitle: 'tincidunt',
    content: '<div>tincidunt</div>',
    tags: mockTagItems,
  },
]

export const mockItem: PostItem = {
  id: '12kfdjasdg',
  createdAt: createdAt,
  updatedAt: createdAt,
  publishedAt: createdAt,
  revisedAt: createdAt,
  title: 'mock title',
  subTitle: 'mock sub title',
  content:
    '<h2>mock heading</h2><p>mock content</p><p>mock content</p><p>mock content</p><p>mock content</p><p>mock content</p><h2>mock heading</h2>',
  tags: mockTagItems,
}

export const mockItems: CommonList<PostItem> = {
  contents: mockPostItems,
  totalCount: 10,
  offset: 0,
  limit: 10,
}

export const mockTags: CommonList<TagItem> = {
  contents: mockTagItems,
  totalCount: 10,
  offset: 0,
  limit: 10,
}

export const mockLinks: Link[] = [
  { value: 'a', href: '/a' },
  { value: 'b', href: '/b' },
]
