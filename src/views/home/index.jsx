import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDateAction } from '@/store/modules/home'
import { isEmptyO } from '@/utils'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, disCountInfo, recommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    disCountInfo: state.home.disCountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
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
          {/* 热门 */}
          {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
          {/* 折扣 */}
          {isEmptyO(disCountInfo) && <HomeSectionV2 infoData={disCountInfo} />}
          {/* 向往城市 */}
          {isEmptyO(longForInfo) && <HomeLongFor infoData={longForInfo} />}
          {/* 高性价比 */}
          {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
          {/* 高评分 */}
          {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
          {/* plus房源 */}
          {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
        </div>
      </HomeWrapper>
    </div>
  )
})

export default Home