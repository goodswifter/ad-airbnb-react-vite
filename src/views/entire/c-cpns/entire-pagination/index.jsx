import { Pagination } from '@mui/material'
import { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchEntireDataAction } from '@/store/modules/entire/actionCreators'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const { currentPage, totalCount } = useSelector(
    state => ({
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount
    }),
    shallowEqual
  )

  const count = Math.ceil(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const dispatch = useDispatch()
  const handleChange = (_, newPage) => {
    window.scrollTo(0, 0)
    dispatch(fetchEntireDataAction(newPage - 1))
  }

  return (
    <PaginationWrapper>
      <Pagination count={count} page={currentPage + 1} onChange={handleChange} />
      <div className="desc">
        第 {start} - {end} 个房源，共超过 300 个
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination
