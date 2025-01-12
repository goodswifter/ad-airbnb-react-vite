import { throttle } from 'underscore'
import { useEffect, useState } from 'react'

function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const listenScroll = throttle(function listenScroll() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', listenScroll)

    return () => {
      window.removeEventListener('scroll', listenScroll)
    }
  }, [])

  return { scrollX, scrollY }
}

export default useScrollPosition
