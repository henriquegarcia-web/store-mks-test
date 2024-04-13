import styles from './styles.module.scss'
import { FiLoader } from 'react-icons/fi'

interface IButton {
  type?: 'primary' | 'secondary'
  icon?: React.ReactNode
  label: string
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  type = 'primary',
  icon,
  label,
  loading = false,
  disabled = false,
  onClick
}: IButton) => {
  return (
    <button
      className={`${styles.button} ${styles[`type_${type}`]}`}
      disabled={disabled || loading}
      onClick={onClick && onClick}
    >
      {loading && <FiLoader className={`${styles.button__Loading} spin`} />}
      {icon && !loading && icon}

      {label}
    </button>
  )
}

export default Button
