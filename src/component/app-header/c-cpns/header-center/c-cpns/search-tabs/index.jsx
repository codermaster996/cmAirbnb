import classNames from 'classnames'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  /** 自定义内部状态 */
  const [currentIndex, setCurrentIndex] = useState(0)

  /** 事件的监听 */
  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  return (
    <TabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames('item', { active: currentIndex === index })}
              key={item}
              onClick={e => itemClickHandle(index)}
            >
              <span className='text'>{item}</span>
              <span className='bottom'></span>
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

export default SearchTabs