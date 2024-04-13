import styles from './styles.module.scss'
import { IoRemove, IoAdd } from 'react-icons/io5'
import { FiLoader } from 'react-icons/fi'

interface IInputCounter {
  initialQuantity: number
  addingProductToCart: boolean
  handleDecreaseQuantity: () => void
  handleIncreaseQuantity: () => void
}

const InputCounter = ({
  initialQuantity,
  addingProductToCart,
  handleDecreaseQuantity,
  handleIncreaseQuantity
}: IInputCounter) => {
  return (
    <div
      className={`${styles.input_counter} ${addingProductToCart && styles.input_disabled}`}
    >
      <button
        className={styles.input_counter__decrease}
        disabled={addingProductToCart}
        onClick={() => handleDecreaseQuantity()}
      >
        <IoRemove />
      </button>
      <span className={styles.input_counter__count}>
        {addingProductToCart ? (
          <FiLoader className="icon_Loading" />
        ) : (
          initialQuantity
        )}
      </span>
      <button
        className={styles.input_counter__increase}
        disabled={addingProductToCart}
        onClick={() => handleIncreaseQuantity()}
      >
        <IoAdd />
      </button>
    </div>
  )
}

export default InputCounter
