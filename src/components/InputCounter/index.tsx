import styles from './styles.module.scss'
import { IoRemove, IoAdd, IoTrashOutline } from 'react-icons/io5'
import { FiLoader } from 'react-icons/fi'

interface IInputCounter {
  initialQuantity: number
  updatingCart: boolean
  handleDecreaseQuantity: () => void
  handleIncreaseQuantity: () => void
}

const InputCounter = ({
  initialQuantity,
  updatingCart,
  handleDecreaseQuantity,
  handleIncreaseQuantity
}: IInputCounter) => {
  return (
    <div
      className={`${styles.input_counter} ${updatingCart && styles.input_disabled}`}
    >
      <button
        className={styles.input_counter__decrease}
        disabled={updatingCart}
        onClick={() => handleDecreaseQuantity()}
      >
        {initialQuantity === 1 ? <IoTrashOutline /> : <IoRemove />}
      </button>
      <span className={styles.input_counter__count}>
        {updatingCart ? <FiLoader className="icon_Loading" /> : initialQuantity}
      </span>
      <button
        className={styles.input_counter__increase}
        disabled={updatingCart}
        onClick={() => handleIncreaseQuantity()}
      >
        <IoAdd />
      </button>
    </div>
  )
}

export default InputCounter
