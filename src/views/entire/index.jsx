import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { isEmptyO } from '@/utils'

const Entire = memo(() => {
  /** 从redux中获取数据 */
  const { roomList, totalCount, currentPage, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  /** 发送网络请求 , 获取数据 , 并保存当前的页码等 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    // 初始化(回到顶部)
    window.scrollTo(0, 0)
  }, [dispatch])

  return (
    <EntireWrapper>
      {isEmptyO(roomList) && <EntireFilter />}
      {isEmptyO(roomList) && <EntireRooms roomList={roomList} totalCount={totalCount} isLoading={isLoading} />}
      {isEmptyO(roomList) && <EntirePagination totalCount={totalCount} currentPage={currentPage} />}
    </EntireWrapper>
  )
})

export default Entire