import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating'

import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemDate, itemWidth = '25%' } = props
  return (
    <ItemWrapper
      verifyColor={itemDate?.verify_info?.text_color ?? '#39576a'}
      itemWidth={itemWidth}
    >
      <div className='inner'>
        <div className='cover'>
          <img src={itemDate?.picture_url} alt="" />
        </div>
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
            sx={{ fontSize: '12px', color: itemDate.star_rating_color, marginRight: '-1px' }}
          />
          <span className='count' >{itemDate.reviews_count}</span>
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