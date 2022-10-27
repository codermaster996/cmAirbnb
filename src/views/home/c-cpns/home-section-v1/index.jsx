import SectionFooter from '@/component/section-footer'
import SectionHeader from '@/component/section-header'
import SectionRooms from '@/component/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1