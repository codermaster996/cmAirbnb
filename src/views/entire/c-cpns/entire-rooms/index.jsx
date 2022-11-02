import RoomItem from '@/component/room-item'
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = props

  /** 事件处理函数 */
  const navigate = useNavigate()
  const itemDateHandle = useCallback((item) => {
    navigate(`/detail/8888`)
  }, [navigate])

  return (
    <RoomsWrapper>
      <h2 className='titel'>{totalCount}多处住宿</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem
                itemDate={item}
                itemWidth='20%'
                key={item._id}
                itemClick={itemDateHandle}
              />
            )
          })
        }
      </div>
      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array,
  totalCount: PropTypes.number
}

export default EntireRooms