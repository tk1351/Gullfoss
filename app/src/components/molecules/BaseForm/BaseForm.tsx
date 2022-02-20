import { FormEvent, VFC } from 'react'
import { useRouter } from 'next/router'
import BaseInput from '../../atoms/BaseInput/BaseInput'
import { useInput } from '../../../hooks/useInput'
import styles from './BaseForm.module.css'

const BaseForm: VFC = () => {
  const router = useRouter()
  const { form } = styles
  const { value, onChange } = useInput()

  const onSubmit = async (event: FormEvent<HTMLFormElement>, query: string) => {
    event.preventDefault()
    if (!query) return
    await router.push({
      pathname: '/search/posts',
      query: { query },
    })
  }
  return (
    <form
      className={form}
      aria-label='form'
      onSubmit={(event) => onSubmit(event, value)}
    >
      <BaseInput
        type={'text'}
        placeholder={'Search...'}
        value={value}
        width='100%'
        height='100%'
        onChange={onChange}
      />
    </form>
  )
}

export default BaseForm
