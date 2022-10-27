import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { LongforWrapper } from './style'
import SectionHeader from '@/component/section-header'
import LongforItem from '@/component/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map((item, index) => {
              return <LongforItem itemData={item} key={index} />
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor