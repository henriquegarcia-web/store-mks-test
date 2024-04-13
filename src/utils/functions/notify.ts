import { Slide, toast } from 'react-toastify'

const handleNotify = (
  alert: string,
  type?: 'info' | 'success' | 'warning' | 'error'
) => {
  switch (type) {
    case 'info':
      toast.info(alert, {
        transition: Slide
      })
      break
    case 'success':
      toast.success(alert, {
        transition: Slide
      })
      break
    case 'warning':
      toast.warning(alert, {
        transition: Slide
      })
      break
    case 'error':
      toast.error(alert, {
        transition: Slide
      })
      break
    default:
      toast(alert, {
        transition: Slide
      })
      break
  }
}

export { handleNotify }
