import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  /** 设置内部状态 来监听位置 */
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  /** 监听 Window 的滚动 */
  useEffect(() => {
    const scrollHandle = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    document.addEventListener('scroll', scrollHandle)
    return () => {
      document.removeEventListener('scroll', scrollHandle)
    }
  })

  return { scrollX, scrollY }
}