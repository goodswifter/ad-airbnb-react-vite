import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { changeHeaderConfigAction, fetchHomeDataAction } from '@/store'
import { isEmptyO } from '@/utils'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { HomeWrapper } from './style'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, recommendInfo, discountInfo, longforInfo, plusInfo } =
    useSelector(
      state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        recommendInfo: state.home.recommendInfo,
        discountInfo: state.home.discountInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
      }),
      shallowEqual
    )

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 使用isEmptyO判空, 可以减少一次渲染 */}
        {/* 1. 热门目的地 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {/* 2. 探索xxx的精彩之地 */}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {/* 3. 你可能想去 */}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
        {/* 4. xxx高性价比房源 */}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {/* 5. xxx高分好评房源 */}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {/* 6. xxx的爱彼迎Plus房源 */}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
