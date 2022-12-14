import React, { memo, useEffect, useState } from 'react'

import { RightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon-avatar'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-menu'


const HeaderRight = memo(() => {
  /** 定义组件内部的转态 */
  const [showPanel, setShowPanel] = useState(false)

  /** 副作用代码 */
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)

    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  /** 事件处理函数 */
  function profilShowPanelHandle() {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登陆</span>
        <span className='btn'>注册</span>
        <span className='btn overlap'>
          <IconGlobal />
        </span>
      </div>

      <div className='profile' onClick={profilShowPanelHandle}>
        <div className='icon-left'><IconMenu /></div>
        <div className='icon-right'><IconAvatar /></div>

        {
          showPanel && (
            <div className='panel'>
              <div className='panel-top'>
                <div className='item register'>注册</div>
                <div className='item login'>登陆</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>

    </RightWrapper>
  )
})

export default HeaderRight