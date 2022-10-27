import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  tabNames.push('abc')
  tabNames.push('cba')
  tabNames.push('bac')


  function itemClickHandle(item, index) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={e => itemClickHandle(item, index)}
                className={classNames('item', { active: index === currentIndex })}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs