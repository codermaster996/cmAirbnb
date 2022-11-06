import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating'
import { Carousel } from 'antd';

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicaor from '@/base-ui/indicaor';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemDate, itemWidth = '25%', ratingColor = '#00848A', itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  /** 事件处理的逻辑 */
  function controlClickHandle(isNext = true, event) {
    // 上一个面板/下一个面板
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = itemDate.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemDate)
  }

  /** 子元素的赋值 */
  const pictureElement = (
    <div className='cover'>
      <img src={itemDate?.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)} >
          <IconArrowLeft height='30' width='30' />
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight height='30' width='30' />
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemDate?.picture_urls?.map((item, index) => {
            return (
              <div className='cover' key={index}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      <div className='indicaor'>
        <Indicaor selectIndex={selectIndex}>
          {
            itemDate?.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={index}>
                  <span
                    className={classNames('dot',
                      { active: selectIndex === index }
                    )}>
                  </span>
                </div>
              )
            })
          }
        </Indicaor>
      </div>
    </div>
  )

  return (
    <ItemWrapper
      verifyColor={itemDate?.verify_info?.text_color ?? '#39576a'}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className='inner'>
        {itemDate.picture_urls ? sliderElement : pictureElement}
        <div className='desc'>
          {itemDate.verify_info.messages.join('.')}
        </div>
        <div className='name'>{itemDate.name}</div>
        <div className='price'>￥{itemDate.price}/晚</div>

        <div className='bottom'>
          <Rating
            name="read-only"
            precision={0.1}
            value={itemDate.star_rating ?? 5}
            readOnly
            sx={{ fontSize: '12px', color: ratingColor, marginRight: '-1px' }}
          />
          <span className='count' >{itemDate.reviews_count}</span>3
          {
            itemDate.bottom_info &&
            <span className='extra'>·{itemDate.bottom_info.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemDate: PropTypes.object
}

export default RoomItem