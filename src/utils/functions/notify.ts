import { Slide, toast } from 'react-toastify'

const handleNotify = (
  alert: string,
  type?: 'info' | 'success' | 'warning' | 'error'
) => {
  switch (type) {
    case 'info':
      toast.info(alert)
      break
    case 'success':
      toast.success(alert)
      break
    case 'warning':
      toast.warning(alert)
      break
    case 'error':
      toast.error(alert)
      break
    default:
      toast(alert)
      break
  }
}

export { handleNotify }
