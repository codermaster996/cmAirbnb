import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerDate from '@/assets/data/footer.json'
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrapper'>
        <div className='serview'>
          {
            footerDate.map((item, index) => {
              return (
                <div className='item' key={index}>
                  <div className='name'>{item.name}</div>
                  <div className='list'>
                    {
                      item.list.map(iten => {
                        return <div className='iten' key={iten}>{iten}</div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='statement'>
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301 codermaster-仿爱彼迎项目
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter