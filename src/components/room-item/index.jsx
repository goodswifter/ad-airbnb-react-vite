import Rating from '@mui/material/Rating'
import PropTypes from 'prop-types'
import { memo, useState, useRef } from 'react'
// import Slider from 'react-slick'
import classNames from 'classnames'

import { ItemWrapper } from './style'
import Indicator from '@/base-ui/indicator'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { Carousel } from 'antd'

const RoomItem = memo(props => {
  const { itemData, itemWidth, itemClick } = props

  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  function handleControlClick(e, isNext = true) {
    if (isNext) {
      sliderRef.current.next()
    } else {
      sliderRef.current.prev()
    }

    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex >= itemData.picture_urls.length) newIndex = 0

    setSelectIndex(newIndex)
    e.stopPropagation()
  }

  const SingleImg = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  function SliderImgs() {
    return (
      <div className="slider">
        <h2 style={{ position: 'absolute', color: 'red', zIndex: 1 }}>
          {selectIndex + 1} / {itemData?.picture_urls?.length}
        </h2>
        <div className="control">
          <div className="btn left" onClick={e => handleControlClick(e, false)}>
            <IconArrowLeft width="24" height="24" />
          </div>
          <div className="btn right" onClick={e => handleControlClick(e, true)}>
            <IconArrowRight width="24" height="24" />
          </div>
        </div>

        <Carousel dots={false} ref={sliderRef}>
          {itemData.picture_urls.map((item, index) => {
            return (
              <div key={index} className="cover">
                <img src={item} alt="" />
              </div>
            )
          })}
        </Carousel>

        <div className="indicator-wrapper">
          <Indicator selectIndex={selectIndex}>
            {itemData.picture_urls.map((item, index) => (
              <div key={item} className="dot-wrapper">
                <div className={classNames('dot', { active: selectIndex === index })} />
              </div>
            ))}
          </Indicator>
        </div>
      </div>
    )
  }

  function handleItemClick() {
    itemClick && itemClick()
  }

  return (
    <ItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      $itemWidth={itemWidth}
      onClick={handleItemClick}>
      <div className="inner">
        {/* <div className="cover"><img src={itemData?.picture_url} alt="" /></div> */}
        {itemData.picture_urls ? SliderImgs() : SingleImg}
        <div className="desc">{itemData?.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData?.name}</div>
        <div className="price">¥{itemData?.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '5px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className="extra">·{itemData.bottom_info?.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func
}

export default RoomItem
