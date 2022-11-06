import RoomItem from '@/component/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = props

  /** 事件处理 */
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemDateHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate(`/detail/${item.id}`)
  }, [navigate, dispatch])

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