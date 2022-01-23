import { VFC } from 'react'
import styles from './BaseSelect.module.css'

type Props = {
  options: string[]
}

const BaseSelect: VFC<Props> = ({ options }) => {
  const { wrapper, select } = styles

  const handleChange = (event: { target: HTMLSelectElement }) => {
    //TODO 値を変えた場合の処理を記述する
    console.log(event.target.value)
  }
  return (
    <div className={wrapper}>
      <select
        name='sort'
        className={select}
        onChange={handleChange}
        aria-label='select'
      >
        {options.map((option, index) => (
          <option key={index} value={option} aria-label={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BaseSelect
