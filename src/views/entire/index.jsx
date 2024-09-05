import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'

import { EntireWrapper } from './style'

import { fetchEntireDataAction } from '@/store'
import { changeHeaderConfigAction } from '@/store'
import EntirePagination from './c-cpns/entire-pagination'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
