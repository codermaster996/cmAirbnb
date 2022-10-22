import IconLogo from 'assets/svg/icon-logo'
import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft