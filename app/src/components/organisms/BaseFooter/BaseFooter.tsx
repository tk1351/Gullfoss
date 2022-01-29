import { VFC } from 'react'
import styles from './BaseFooter.module.css'
import BaseSNSLink from '../../atoms/BaseSNSLink/BaseSNSLink'
import { FALink } from '../../../types'

type Props = {
  links: FALink[]
}

const BaseFooter: VFC<Props> = ({ links }) => {
  const { footer, title, linksWrapper } = styles
  return (
    <footer className={footer}>
      <p aria-label='footer-title' className={title}>
        SNS Links
      </p>
      <ul className={linksWrapper}>
        {links.map((link, index) => (
          <li key={index}>
            <BaseSNSLink icon={link.icon} href={link.href} />
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default BaseFooter
