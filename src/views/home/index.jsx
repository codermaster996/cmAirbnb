import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDateAction } from '@/stor/modules/home'
import SectionHeader from '@/component/section-header'
import SectionRooms from '@/component/section-rooms'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  /** 派发异步事件:发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDateAction())
  }, [dispatch])

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className='content'>
          <div className='good-price'>
            <SectionHeader title={goodPriceInfo.title} />
            <SectionRooms roomList={goodPriceInfo.list} />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home