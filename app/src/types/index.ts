import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type HrefObject = {
  pathname: string
  query: { [key in 'page' | 'query']?: string }
}

export type FALink = { icon: IconDefinition; href: string }
export type Link = { value: string; href: string | HrefObject }
