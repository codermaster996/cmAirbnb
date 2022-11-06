import { changeHeaderConfigAction } from '@/store/modules/main'
import { isEmptyO } from '@/utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  /** 从redux中获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    // 修改header页面配置
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  })

  return (
    <DetailWrapper>
      {isEmptyO(detailInfo) && <DetailPictures detailInfo={detailInfo} />}
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail