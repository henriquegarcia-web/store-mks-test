import styles from './styles.module.scss'
import { IoRemove, IoAdd } from 'react-icons/io5'

interface IInputCounter {
  initialQuantity: number
}

const InputCounter = ({ initialQuantity }: IInputCounter) => {
  return (
    <div className={styles.input_counter}>
      <button className={styles.input_counter__decrease}>
        <IoRemove />
      </button>
      <span className={styles.input_counter__count}>{initialQuantity}</span>
      <button className={styles.input_counter__increase}>
        <IoAdd />
      </button>
    </div>
  )
}

export default InputCounter
