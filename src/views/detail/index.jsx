import { isEmptyO } from '@/utils'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <DetailWrapper>
      {isEmptyO(detailInfo) && <DetailPictures detailInfo={detailInfo} />}
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail