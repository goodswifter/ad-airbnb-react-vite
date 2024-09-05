import PropTypes from 'prop-types'
import { memo } from 'react'

import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo(props => {
  const { roomList = [], itemWidth = '25%' } = props

  return (
    <RoomsWrapper>
      {roomList.slice(0, 8)?.map(item => (
        <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
      ))}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRooms
