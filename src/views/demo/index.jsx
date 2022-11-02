import Indicaor from '@/base-ui/indicaor'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const [selectIndex, setSelectIndex] = useState(0)
  const name = ['aaa', 'bbb', 'ccc', 'abc', 'cba', 'bac', 'fff', 'codermaster', 'bird']

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = name.length - 1
    if (newIndex > name.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={e => toggleClickHandle(false)}>上一个</button>
        <button onClick={e => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className='list'>
        <Indicaor selectIndex={selectIndex}>
          {
            name.map((item, index) => {
              return <button key={index}>{item}</button>
            })
          }
        </Indicaor>
      </div>
    </DemoWrapper>
  )
})

export default Demo