import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/component/section-header'
import SectionRooms from '@/component/section-rooms'
import SectionTabs from '@/component/section-tabs'
import SectionFooter from '@/component/section-footer'

const HomeSectionV2 = memo((props) => {
  /** 从props 获取数据 */
  const { infoData = {} } = props

  /** 定义内部的state */
  const initiaName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initiaName)
  const tabNames = infoData.dest_address?.map(item => item.name)


  /** 事件处理函数 */
  const tabClickHandle = useCallback((idex, name) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth='33.3333%' />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2