import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicaorWrapper } from './style'

const Indicaor = memo((props) => {
  const { selectIndex = 0 } = props
  const conentRef = useRef()

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEI = conentRef.current.children[selectIndex]
    const itemLeft = selectItemEI.offsetLeft
    const itemWidth = selectItemEI.clientWidth

    // 2.content的宽度
    const contentWidth = conentRef.current.clientWidth
    const contentScroll = conentRef.current.scrollWidth

    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    // 1.特殊情况的处理
    if (distance < 0) distance = 0
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance

    // 5.改变位置即可
    conentRef.current.style.transform = `translate(${-distance}px)`

  }, [selectIndex])

  return (
    <IndicaorWrapper>
      <div className='i-content' ref={conentRef}>
        {
          props.children
        }
      </div>
    </IndicaorWrapper>
  )
})

Indicaor.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicaor