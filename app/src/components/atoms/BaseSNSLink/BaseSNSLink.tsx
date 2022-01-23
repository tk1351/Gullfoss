import { VFC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import styles from './BaseSNSLink.module.css'

type Props = {
  icon: IconDefinition
  href: string
}

const BaseSNSLink: VFC<Props> = ({ icon, href }) => {
  const { link } = styles
  return (
    <a href={href} className={link}>
      <FontAwesomeIcon icon={icon} aria-label='icon-sns' />
    </a>
  )
}

export default BaseSNSLink
