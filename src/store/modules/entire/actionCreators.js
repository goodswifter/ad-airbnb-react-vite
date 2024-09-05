import * as actionTypes from './constants'
import { getEntireRoomList } from 'services'

const changeRoomListAction = roomList => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

const changeCurrentPageAction = currentPage => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

const changeTotalCountAction = totalCount => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

const changeLoadingAction = isLoading => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

const fetchEntireDataAction =
  (page = 0) =>
  async dispatch => {
    // 设置isLoading
    dispatch(changeLoadingAction(true))

    const res = await getEntireRoomList(page * 20)
    dispatch(changeLoadingAction(false))

    // 保存数据
    dispatch(changeCurrentPageAction(page))
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
  }

export {
  // changeRoomListAction,
  // changeCurrentPageAction,
  // changeTotalCountAction,
  fetchEntireDataAction
}
