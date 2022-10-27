import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useState, useRef } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [postIndex, setPostIndex] = useState(0)
  const scrollConentRef = useRef()
  const totalDistanceRef = useRef()

  /** 组件渲染完毕,判断是否显示右边的按钮 */
  useEffect(() => {
    const scrollWidth = scrollConentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollConentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight) {
    const newIndex = isRight ? postIndex - 1 : postIndex + 1
    const newDom = scrollConentRef.current.children[newIndex]
    const newOffsetLeft = newDom.offsetLeft
    scrollConentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPostIndex(newIndex)
    // 是否继续显示左右按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='icon left' onClick={e => controlClickHandle(true)} >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='icon right' onClick={e => controlClickHandle(false)} >
          <IconArrowRight />
        </div>
      )}
      <div className='scroll'>
        <div className='scroll-conent' ref={scrollConentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})


export default ScrollView