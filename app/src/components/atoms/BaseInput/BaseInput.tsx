import {
  ChangeEvent,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  VFC,
} from 'react'
import styles from './BaseInput.module.css'

type Props = {
  type: HTMLInputTypeAttribute | undefined
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  width?: number
  height?: number
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const BaseInput: VFC<Props> = ({
  type,
  placeholder,
  value,
  onChange,
  width,
  height,
  ...props
}) => {
  const { input } = styles
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={
        width && height ? { width: `${width}px`, height: `${height}px` } : {}
      }
      className={input}
      {...props}
    />
  )
}

export default BaseInput
