import IconLogo from 'assets/svg/icon-logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {

  const navgit = useNavigate()
  // 事件处理函数
  function toHomeHandle() {
    navgit('/')
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={toHomeHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft