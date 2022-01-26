import { ChangeEvent, FormEvent, useState, VFC } from 'react'
import BaseInput from '../../atoms/BaseInput/BaseInput'
import { useInput } from '../../../hooks/useInput'

const BaseForm: VFC = () => {
  const { value, onChange } = useInput()

  const onSubmit = (event: FormEvent<HTMLFormElement>, query: string) => {
    event.preventDefault()
    if (!query) return
    console.log(query)
  }
  return (
    <form aria-label='form' onSubmit={(event) => onSubmit(event, value)}>
      <BaseInput
        type={'text'}
        placeholder={'Search...'}
        value={value}
        onChange={onChange}
      />
    </form>
  )
}

export default BaseForm
