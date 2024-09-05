import PropTypes from 'prop-types'
import { memo, useState } from 'react'

import PictureBrowser from '@/base-ui/picture-brwoser'
import { PicturesWrapper } from './style'

const DetailPictures = memo(props => {
  const { pictureUrls } = props

  const [isShow, setIsShow] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  /** 切换显示弹框 */
  function toggleIsShow(e, show = true) {
    const currentIndex = e.currentTarget.dataset.index
    currentIndex && setCurrentIndex(Number(currentIndex))

    setIsShow(show)
  }

  return (
    <PicturesWrapper>
      <div className="picture-list">
        <div className="left">
          <div data-index={0} className="picture-item" onClick={e => toggleIsShow(e)}>
            <img src={pictureUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {pictureUrls.slice(1, 5).map((url, index) => (
            <div
              key={url}
              data-index={index + 1}
              className="picture-item"
              onClick={e => toggleIsShow(e)}>
              <img src={url} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="show-btn" onClick={e => toggleIsShow(e)}>
        <span>查看照片</span>
      </div>
      {isShow && (
        <PictureBrowser
          pictureUrls={pictureUrls}
          closeClick={e => toggleIsShow(e, false)}
          selectIndex={currentIndex}
        />
      )}
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {
  pictureUrls: PropTypes.array
}

export default DetailPictures
