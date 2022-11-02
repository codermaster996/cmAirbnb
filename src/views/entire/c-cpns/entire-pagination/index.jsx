import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Pagination from '@mui/material/Pagination';
import { PageinationWrapper } from './style'
import { useDispatch } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo((props) => {
  const { currentPage, totalCount } = props

  // 小算法
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /** 事件处理的逻辑 */
  const dispatch = useDispatch()
  function pageCountHnadle(event, pageCount) {
    // 回到顶部
    window.scrollTo(0, 0)
    // 更新最新的页码:redux=>pageCount
    dispatch(fetchRoomListAction(pageCount - 1))
  }

  return (
    <PageinationWrapper>
      <div className="info">
        <Pagination count={totalPage} onChange={pageCountHnadle} />
        <div className="desc">
          第{startCount}-{endCount}个房源,共超过{totalCount}个
        </div>
      </div>

    </PageinationWrapper>
  )
})

EntirePagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number
}

export default EntirePagination