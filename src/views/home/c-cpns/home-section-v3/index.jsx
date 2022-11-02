import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionV3Wrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/component/room-item'
import SectionHeader from '@/component/section-header'
import SectionFooter from '@/component/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemDate={item} itemWidth='20%' key={item.id} ratingColor={item.star_rating_color} />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name={infoData.type} />
    </SectionV3Wrapper>

  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3