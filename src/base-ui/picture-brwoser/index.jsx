import classNames from 'classnames'
import PropTypes from 'prop-types'
import { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import IconArrowLeft from 'assets/svg/icon-arrow-left'
import IconArrowRight from 'assets/svg/icon-arrow-right'
import IconClose from 'assets/svg/icon-close'
import IconTriangleTop from 'assets/svg/icon-triangle-top'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo(props => {
  const { pictureUrls, closeClick, selectIndex = 0 } = props

  const [currentIndex, setCurrentIndex] = useState(selectIndex)
  const [isNext, setIsNext] = useState(true)
  const [isShowIndicator, setIsShowIndicator] = useState(true)

  function handleCloseBtnClick(e) {
    e.stopPropagation()
    closeClick && closeClick(e)
  }

  useEffect(() => {
    // 隐藏滚动条
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  function handleControlClick(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex >= pictureUrls.length) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function handleCurrentIndexChange(index) {
    setCurrentIndex(index)
    setIsNext(index > currentIndex)
  }

  function handleIsShowIndicatorChange() {
    setIsShowIndicator(!isShowIndicator)
  }

  return (
    <BrowserWrapper $isNext={isNext} $isShowIndicator={isShowIndicator}>
      <div className="top">
        <div className="close-btn" onClick={handleCloseBtnClick}>
          <IconClose />
        </div>
      </div>
      <div className="center">
        <div className="control">
          <div className="btn left" onClick={() => handleControlClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={() => handleControlClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="pic-wrapper">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[currentIndex]} classNames="pic" timeout={250}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <div className="desc">
            <span className="left">
              {currentIndex + 1}/{pictureUrls.length}: room Apartment 图片
              {currentIndex + 1}
            </span>
            <div className="right" onClick={handleIsShowIndicatorChange}>
              <span className="title">{isShowIndicator ? '隐藏' : '显示'}照片列表</span>
              <CSSTransition
                in={isShowIndicator}
                classNames="arrow"
                timeout={300}
                unmountOnExit={false}>
                <IconTriangleTop />
              </CSSTransition>
            </div>
          </div>
          <div className="indicator-wrapper">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((url, index) => (
                <div
                  key={url}
                  className={classNames('item', { active: currentIndex === index })}
                  onClick={() => handleCurrentIndexChange(index)}>
                  <img src={url} alt="" />
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
  selectIndex: PropTypes.number
}

export default PictureBrowser
