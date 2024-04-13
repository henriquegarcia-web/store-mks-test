import styles from './styles.module.scss'

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
      {icon && icon}
      {label}
    </button>
  )
}

export default Button
