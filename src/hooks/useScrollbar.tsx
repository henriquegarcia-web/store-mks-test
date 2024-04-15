import { useState, useEffect, RefObject } from 'react'

function useScrollbar(elementRef: RefObject<HTMLElement>): [boolean] {
  const [containerHasScrollbar, setContainerHasScrollbar] =
    useState<boolean>(false)

  useEffect(() => {
    const element = elementRef.current

    const checkScrollbar = () => {
      if (element) {
        const hasScrollbar = element.scrollHeight > element.clientHeight
        setContainerHasScrollbar(hasScrollbar)
      }
    }

    checkScrollbar()

    let resizeObserver: ResizeObserver | undefined

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(checkScrollbar)
    } else {
      import('resize-observer-polyfill').then((module) => {
        resizeObserver = new module.default(checkScrollbar)
      })
    }

    if (resizeObserver && element) {
      resizeObserver.observe(element)
    }

    return () => {
      if (resizeObserver && element) {
        resizeObserver.unobserve(element)
      }
    }
  }, [elementRef])

  return [containerHasScrollbar]
}

export default useScrollbar
