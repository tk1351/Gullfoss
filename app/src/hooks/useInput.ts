import { ChangeEvent, useState } from 'react'

export const useInput = () => {
  const [value, setValue] = useState('')
  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
  }
}
